# zaidofficial.us

Static portfolio for Zaid Umar. The `/docs` folder is ready for GitHub Pages so the site can serve from `https://zaidofficial.us` or `https://<github-username>.github.io/zaidofficial.us/`.

## Local preview

Open `docs/index.html` directly in a browser or serve the folder locally:

```bash
npx serve docs
```

## Publishing to GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, choose **Deploy from a branch** and set the folder to `/docs` on the default branch.
3. Save. GitHub Pages will build and host the site automatically.
4. (Optional) Point your custom domain to GitHub Pages using `A` records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Add `CNAME` record for `zaidofficial.us` pointing to `<github-username>.github.io`.
5. Keep the `docs/CNAME` file in this repo with `zaidofficial.us` so GitHub Pages knows which domain to serve.

Once DNS propagates and the Pages build finishes, your site will be live at `https://zaidofficial.us`.
