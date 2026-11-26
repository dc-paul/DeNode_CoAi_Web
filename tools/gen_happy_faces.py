#!/usr/bin/env python3
"""Render the Happy Faces tracker from static/data/happy-faces.json."""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
from collections import defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "static" / "data" / "happy-faces.json"

PAGES = {
    "nl": ROOT / "static" / "nl" / "happy-faces.html",
    "fr": ROOT / "static" / "fr" / "happy-faces.html",
    "en": ROOT / "static" / "en" / "happy-faces.html",
}

LABELS = {
    "nl": {
        "wanted": "Gezocht",
        "aria": "Bekijk de gevonden Happy Face",
        "found_alt": "Gevonden Happy Face",
        "alts": ["Gevonden Happy Face op locatie", "Detail van de Happy Face"],
        "finder": "gevonden door",
    },
    "fr": {
        "wanted": "Recherché",
        "aria": "Voir la Happy Face trouvée",
        "found_alt": "Happy Face trouvée",
        "alts": ["Happy Face trouvée sur place", "Détail de la Happy Face"],
        "finder": "trouvé par",
    },
    "en": {
        "wanted": "Wanted",
        "aria": "View the found Happy Face",
        "found_alt": "Found Happy Face",
        "alts": ["Found Happy Face on location", "Detail of the Happy Face"],
        "finder": "found by",
    },
}

COUNTER_STYLE = 'font-family:var(--font-display);font-size:28px;color:var(--ink)'

WANTED_STYLE = (
    "display:flex;align-items:center;justify-content:center;aspect-ratio:4/5;"
    "background:var(--white);border:2px dashed #c9c2b3;"
    "font-family:var(--font-display);font-size:15px;letter-spacing:.06em;"
    "text-transform:uppercase;color:#98917f"
)

IMG_STYLE = "width:100%;height:100%;object-fit:cover;display:block"


def esc(value: Any) -> str:
    return html.escape(str(value), quote=True)


def load_data(path: Path) -> dict[str, Any]:
    with path.open(encoding="utf-8") as fh:
        data = json.load(fh)
    validate_data(data)
    return data


def validate_data(data: dict[str, Any]) -> None:
    total = data.get("total")
    slots = data.get("slots")
    if not isinstance(total, int) or total < 1:
        raise ValueError("happy-faces.json must contain a positive integer total")
    if not isinstance(slots, list) or len(slots) != total:
        raise ValueError(f"happy-faces.json must contain exactly {total} slots")

    seen: set[int] = set()
    for slot in slots:
        n = slot.get("number")
        if not isinstance(n, int) or n < 1 or n > total:
            raise ValueError(f"invalid slot number: {n!r}")
        if n in seen:
            raise ValueError(f"duplicate slot number: {n}")
        seen.add(n)

        status = slot.get("status")
        if status not in {"wanted", "found"}:
            raise ValueError(f"slot {n}: status must be wanted or found")

        images = slot.get("images")
        if not isinstance(images, dict):
            raise ValueError(f"slot {n}: images must be an object")
        for key in ("thumb", "full", "detail"):
            if key not in images:
                raise ValueError(f"slot {n}: images.{key} is required")
        if status == "found" and not (images.get("thumb") and images.get("full")):
            raise ValueError(f"slot {n}: found slots need at least thumb and full images")


def count_found(data: dict[str, Any]) -> int:
    return sum(1 for slot in data["slots"] if slot["status"] == "found")


def image_url(data: dict[str, Any], filename: str) -> str:
    if filename.startswith(("/", "http://", "https://", "../", "./")):
        return filename
    return f"{data.get('image_base', '../happy-faces-img/')}{filename}"


def render_wanted(lang: str) -> str:
    label = esc(LABELS[lang]["wanted"])
    return (
        '<li><div class="st" style="cursor:default">'
        f'<span class="pile" style="{WANTED_STYLE}">{label}</span>'
        "</div></li>"
    )


def render_found(data: dict[str, Any], lang: str, slot: dict[str, Any]) -> str:
    labels = LABELS[lang]
    images = slot["images"]
    full = image_url(data, images["full"])
    detail = images.get("detail")
    img_urls = [full]
    if detail:
        img_urls.append(image_url(data, detail))

    alt_values = labels["alts"][: len(img_urls)]
    if len(alt_values) < len(img_urls):
        alt_values.extend([labels["found_alt"]] * (len(img_urls) - len(alt_values)))

    handle = (slot.get("finder_handle") or "").strip()
    if handle and not handle.startswith("@"):
        handle = f"@{handle}"
    finder_html = ""
    if handle:
        finder_html = f'<span class="lc">{esc(labels["finder"])} {esc(handle)}</span>'

    title = slot.get("title") or labels["found_alt"]
    thumb = image_url(data, images.get("thumb") or images["full"])
    return (
        '<li><div class="st" style="cursor:default">'
        f'<button type="button" class="hf-found" aria-label="{esc(labels["aria"])}" '
        f'data-imgs="{esc("|".join(img_urls))}" data-alts="{esc("|".join(alt_values))}">'
        '<span class="pile" style="display:block;aspect-ratio:4/5">'
        f'<img src="{esc(thumb)}" alt="{esc(title)}" loading="lazy" style="{IMG_STYLE}">'
        "</span></button>"
        f"{finder_html}</div></li>"
    )


def render_wall(data: dict[str, Any], lang: str) -> str:
    tiles = []
    for slot in sorted(data["slots"], key=lambda item: item["number"]):
        if slot["status"] == "found":
            tiles.append(render_found(data, lang, slot))
        else:
            tiles.append(render_wanted(lang))
    return f'<ul class="hf-wall">{"".join(tiles)}</ul>'


def render_hero_count(data: dict[str, Any]) -> str:
    return f"<b>{count_found(data)}/{data['total']}</b>"


def render_tracker_count(data: dict[str, Any]) -> str:
    return f'<b style="{COUNTER_STYLE}">{count_found(data)}/{data["total"]}</b>'


def replace_marked_or_pattern(
    text: str,
    start_marker: str,
    end_marker: str,
    replacement: str,
    pattern: str,
    group_name: str,
) -> str:
    start = f"<!-- {start_marker} -->"
    end = f"<!-- {end_marker} -->"
    marked = re.compile(re.escape(start) + r".*?" + re.escape(end), re.DOTALL)
    marked_replacement = f"{start}{replacement}{end}"
    if marked.search(text):
        return marked.sub(marked_replacement, text, count=1)

    match = re.search(pattern, text, flags=re.DOTALL)
    if not match:
        raise ValueError(f"could not find region for {start_marker}")
    return text[: match.start(group_name)] + marked_replacement + text[match.end(group_name) :]


def replace_wall(text: str, wall: str) -> str:
    start = "<!-- hf:wall -->"
    end = "<!-- /hf:wall -->"
    marked = re.compile(re.escape(start) + r".*?" + re.escape(end), re.DOTALL)
    marked_replacement = f"{start}\n{wall}\n{end}"
    if marked.search(text):
        return marked.sub(marked_replacement, text, count=1)

    wall_match = re.search(r'<ul class="hf-wall">.*?</ul>', text, flags=re.DOTALL)
    if not wall_match:
        raise ValueError("could not find hf-wall")
    return text[: wall_match.start()] + marked_replacement + text[wall_match.end() :]


def render_page(text: str, data: dict[str, Any], lang: str) -> str:
    text = replace_marked_or_pattern(
        text,
        "hf:hero-count",
        "/hf:hero-count",
        render_hero_count(data),
        r'(?P<prefix><div class="cnt">)(?P<region><b>.*?</b>)',
        "region",
    )
    text = replace_marked_or_pattern(
        text,
        "hf:tracker-count",
        "/hf:tracker-count",
        render_tracker_count(data),
        r'(?P<prefix><span class="dn-kicker">)(?P<region><b style="[^"]+">.*?</b>)',
        "region",
    )
    text = replace_wall(text, render_wall(data, lang))
    return text


def finder_tally(data: dict[str, Any]) -> list[dict[str, Any]]:
    slots_by_handle: dict[str, set[int]] = defaultdict(set)
    display_handles: dict[str, str] = {}
    for slot in data["slots"]:
        if slot["status"] != "found":
            continue
        handle = (slot.get("finder_handle") or "").strip()
        if not handle:
            continue
        if not handle.startswith("@"):
            handle = f"@{handle}"
        key = handle.lower()
        display_handles[key] = handle
        slots_by_handle[key].add(slot["number"])

    tally = []
    for key, slots in slots_by_handle.items():
        tally.append(
            {
                "handle": display_handles[key],
                "count": len(slots),
                "slots": sorted(slots),
                "flag_5_or_more": len(slots) >= 5,
            }
        )
    return sorted(tally, key=lambda item: (-item["count"], item["handle"].lower()))


def print_tally(data: dict[str, Any], tally: list[dict[str, Any]]) -> None:
    print(f"Happy Faces tracker: {count_found(data)}/{data['total']} found")
    if not tally:
        print("Finder tally: no finder handles recorded.")
        return
    print("Finder tally:")
    for item in tally:
        flag = " FLAG 5+" if item["flag_5_or_more"] else ""
        slots = ", ".join(str(slot) for slot in item["slots"])
        print(f"- {item['handle']}: {item['count']} unique slot(s) [{slots}]{flag}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data", type=Path, default=DATA_PATH, help="tracker JSON file")
    parser.add_argument("--check", action="store_true", help="fail if generated HTML is not current")
    parser.add_argument("--tally-out", type=Path, help="write private finder tally JSON outside static/")
    args = parser.parse_args()

    data = load_data(args.data)
    changed: list[Path] = []

    for lang, page in PAGES.items():
        old = page.read_text(encoding="utf-8")
        new = render_page(old, data, lang)
        if old != new:
            changed.append(page)
            if not args.check:
                page.write_text(new, encoding="utf-8")

    tally = finder_tally(data)
    if args.tally_out:
        args.tally_out.parent.mkdir(parents=True, exist_ok=True)
        args.tally_out.write_text(json.dumps(tally, indent=2) + "\n", encoding="utf-8")
    print_tally(data, tally)

    if args.check and changed:
        for page in changed:
            print(f"not up to date: {page.relative_to(ROOT)}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
