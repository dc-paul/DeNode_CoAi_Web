# Juno: React Starter Kit - TypeScript

```sh
npm create juno@latest -- --template react-ts-starter
```

> 🧑‍🚀 **Seasoned dev?** Delete this file. Have fun!

![A screenshot of the starter kit](https://raw.githubusercontent.com/junobuild/create-juno/main/screenshots/screenshot-starter.png)

A starter kit developed for [Juno](https://juno.build) using [React](https://react.dev/) and TypeScript.

## ✨ Links & Resources

- Looking to get started with Juno? Check out the [documentation](https://juno.build).
- Have a look at [React](https://react.dev/) for question regarding the templates.
- Got questions, comments or feedback? [Join our discord](https://discord.gg/wHZ57Z2RAG) or [OpenChat](https://oc.app/community/vxgpi-nqaaa-aaaar-ar4lq-cai/?ref=xanzv-uaaaa-aaaaf-aneba-cai).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                         |
| :-------------------- | :--------------------------------------------- |
| `npm install`         | Installs dependencies                          |
| `npm run dev`         | Starts frontend dev server at `localhost:5173` |
| `juno emulator start` | Quickstart the local development emulator      |
| `npm run build`       | Build your production site to `./dist/`        |
| `juno hosting deploy` | Deploy your project to a Satellite             |

## 🚀 Launch

Explore this [guide](https://juno.build/docs/add-juno-to-an-app/create-a-satellite) to launch your Satellite into orbit via Juno's [administration console](https://console.juno.build).

## Happy Faces tracker

The Happy Faces wall on `static/{nl,fr,en}/happy-faces.html` is generated from
`static/data/happy-faces.json`.

To add a validated find:

1. Prepare the submitted photo:

   ```sh
   python3 -m pip install Pillow
   python3 tools/prepare_happy_face_image.py path/to/photo.jpg --slot 12 --slug instagram-handle --detail-crop 0.25,0.10,0.50,0.65
   ```

   The crop is optional. When omitted, the script uses a centered 4:5 crop. The
   script applies EXIF orientation, writes new JPEGs without EXIF/GPS metadata,
   and prints the JSON image names to paste into the slot.

2. Edit the matching slot in `static/data/happy-faces.json`:
   - set `status` to `found`;
   - set `images.thumb`, `images.full`, and `images.detail`;
   - optionally set `title`, `location`, `finder_handle`, `date_found`, and
     `source` (`instagram`, `facebook`, or `mail`).

3. Regenerate the pages and private tally:

   ```sh
   python3 tools/gen_happy_faces.py --tally-out /tmp/happy-faces-tally.json
   python3 tools/gen_happy_faces.py --check
   ```

The tally is printed by the generator and can also be written outside
`static/`, so it is not published with the site. Finder handles with 5 or more
unique slots are flagged.
