#!/usr/bin/env python3
"""Prepare Happy Faces tracker images from a submitted photo.

Requires Pillow:
    python3 -m pip install Pillow
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Iterable


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT_DIR = ROOT / "static" / "happy-faces-img"
JPEG_QUALITY = 82
Image = None
ImageOps = None


def require_pillow() -> None:
    global Image, ImageOps
    if Image is not None and ImageOps is not None:
        return
    try:
        from PIL import Image as pillow_image
        from PIL import ImageOps as pillow_image_ops
    except ImportError:  # pragma: no cover - exercised only when Pillow is absent.
        print("Pillow is required. Install it with: python3 -m pip install Pillow", file=sys.stderr)
        raise SystemExit(2)
    Image = pillow_image
    ImageOps = pillow_image_ops


def parse_crop(value: str, width: int, height: int) -> tuple[int, int, int, int]:
    parts = [part.strip() for part in value.split(",")]
    if len(parts) != 4:
        raise argparse.ArgumentTypeError("crop must be x,y,w,h")

    as_float = [float(part.rstrip("%")) for part in parts]
    if "%" in value or all(0 <= part <= 1 for part in as_float):
        if "%" in value:
            as_float = [part / 100 for part in as_float]
        x, y, w, h = as_float
        box = (round(x * width), round(y * height), round((x + w) * width), round((y + h) * height))
    else:
        x, y, w, h = as_float
        box = (round(x), round(y), round(x + w), round(y + h))

    left, top, right, bottom = box
    if left < 0 or top < 0 or right > width or bottom > height or right <= left or bottom <= top:
        raise argparse.ArgumentTypeError("crop must be inside the submitted photo")
    return box


def slugify(value: str | None) -> str:
    if not value:
        return ""
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return f"-{slug}" if slug else ""


def basename(slot: int, slug: str | None) -> str:
    return f"found-{slot:02d}{slugify(slug)}"


def fit_long_side(image: Image.Image, max_size: int) -> Image.Image:
    width, height = image.size
    long_side = max(width, height)
    if long_side <= max_size:
        return image.copy()
    scale = max_size / long_side
    new_size = (round(width * scale), round(height * scale))
    return image.resize(new_size, Image.Resampling.LANCZOS)


def center_crop_aspect(image: Image.Image, aspect_width: int, aspect_height: int) -> Image.Image:
    width, height = image.size
    target = aspect_width / aspect_height
    current = width / height
    if current > target:
        crop_width = round(height * target)
        left = (width - crop_width) // 2
        box = (left, 0, left + crop_width, height)
    else:
        crop_height = round(width / target)
        top = (height - crop_height) // 2
        box = (0, top, width, top + crop_height)
    return image.crop(box)


def save_jpeg_without_metadata(image: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    clean = Image.new("RGB", image.size)
    clean.paste(image.convert("RGB"))
    clean.save(path, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)


def output_paths(output_dir: Path, base: str) -> dict[str, Path]:
    return {
        "thumb": output_dir / f"{base}.jpg",
        "full": output_dir / f"{base}-full.jpg",
        "detail": output_dir / f"{base}-d1.jpg",
    }


def prepare(
    source: Path,
    slot: int,
    output_dir: Path,
    slug: str | None,
    detail_crop: str | None,
    overwrite: bool,
) -> dict[str, Path]:
    require_pillow()
    with Image.open(source) as raw:
        original = ImageOps.exif_transpose(raw)
        original.load()

    paths = output_paths(output_dir, basename(slot, slug))
    existing = [path for path in paths.values() if path.exists()]
    if existing and not overwrite:
        names = ", ".join(str(path) for path in existing)
        raise FileExistsError(f"refusing to overwrite existing file(s): {names}")

    full = fit_long_side(original, 1600)
    save_jpeg_without_metadata(full, paths["full"])

    if detail_crop:
        detail_box = parse_crop(detail_crop, *original.size)
        detail_source = original.crop(detail_box)
    else:
        detail_source = center_crop_aspect(original, 4, 5)
    detail = fit_long_side(center_crop_aspect(detail_source, 4, 5), 1600)
    save_jpeg_without_metadata(detail, paths["detail"])

    thumb = fit_long_side(center_crop_aspect(detail_source, 4, 5), 600)
    save_jpeg_without_metadata(thumb, paths["thumb"])

    return paths


def print_json_fragment(paths: dict[str, Path], output_dir: Path) -> None:
    def rel(path: Path) -> str:
        return path.relative_to(output_dir).as_posix()

    print('"images": {')
    print(f'  "thumb": "{rel(paths["thumb"])}",')
    print(f'  "full": "{rel(paths["full"])}",')
    print(f'  "detail": "{rel(paths["detail"])}"')
    print("}")


def main(argv: Iterable[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="submitted source photo")
    parser.add_argument("--slot", type=int, required=True, help="Happy Face slot number, 1-30")
    parser.add_argument("--slug", help="optional finder/source slug for the filename")
    parser.add_argument("--output-dir", type=Path, default=DEFAULT_OUTPUT_DIR)
    parser.add_argument(
        "--detail-crop",
        help="manual close-up crop as x,y,w,h in pixels, 0-1 fractions, or percentages",
    )
    parser.add_argument("--overwrite", action="store_true", help="replace existing output files")
    args = parser.parse_args(argv)

    if args.slot < 1 or args.slot > 30:
        parser.error("--slot must be between 1 and 30")
    if not args.source.exists():
        parser.error(f"source photo does not exist: {args.source}")

    try:
        paths = prepare(args.source, args.slot, args.output_dir, args.slug, args.detail_crop, args.overwrite)
    except Exception as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1

    for kind, path in paths.items():
        print(f"{kind}: {path}")
    print()
    print("Paste these image names into static/data/happy-faces.json:")
    print_json_fragment(paths, args.output_dir)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
