# chelseawright.art

Portfolio site for Chelsea Wright — mixed media artist, Vancouver BC.
Plain static HTML/CSS, no build step. Open `index.html` in a browser or serve
the folder with any static server.

## Structure

- `index.html` — home (hero, selected works, quote band)
- `work.html` — full gallery with lightbox
- `about.html` — bio (**placeholder copy** — see markers in the file)
- `exhibitions.html` — show list (template entry commented in the file)
- `store.html` — inquire-to-buy listings (mailto links)
- `contact.html` — email / Instagram / studio (**placeholder email + handle**)
- `assets/img/` — web-optimized images (1600px `*.jpg`, 800px `*-sm.jpg`)
- `source-photos/` — original full-res photos (not referenced by the site)

## Before launch — placeholders to replace

1. **Email**: `hello@chelseawright.art` appears in `store.html` and
   `contact.html`. Replace with the real inquiry address.

## Deploying to GitHub Pages at chelseawright.art

1. Create a GitHub repo (e.g. `chelseawrightart`) and push this folder to it.
2. Repo → Settings → Pages → Source: **Deploy from a branch**, branch
   `main`, folder `/ (root)`.
3. The `CNAME` file in this repo tells Pages the custom domain. In
   Settings → Pages, the custom domain field should show `chelseawright.art`;
   enable **Enforce HTTPS** once the certificate is issued.
4. At the domain registrar, add DNS records:
   - `A` records for the apex `chelseawright.art` →
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<github-username>.github.io`
5. DNS can take up to a day to propagate; the Pages settings screen shows a
   check when it's verified.

## Adding a new piece

1. Drop the photo(s) in `source-photos/`.
2. Make web sizes (from the repo root):
   ```
   sips -Z 1600 -s format jpeg -s formatOptions 78 source-photos/PHOTO.jpeg --out assets/img/name-1.jpg
   sips -Z 800  -s format jpeg -s formatOptions 75 source-photos/PHOTO.jpeg --out assets/img/name-1-sm.jpg
   ```
3. Copy an existing `work-card` block in `work.html` (and `store.html` /
   `index.html` if it should appear there) and update the image paths,
   title, and meta. Multiple views of one piece go in `data-images`,
   separated by `|`.
