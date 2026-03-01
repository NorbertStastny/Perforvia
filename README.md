# Perfovia landing (Lovable export)

## 1) Install
```bash
npm install
```

## 2) Run locally
```bash
npm run dev
```

## 3) Build
```bash
npm run build
```

## 4) Deploy (free options)
### A) Cloudflare Pages (recommended, free + custom domain)
- Create a new project → connect your GitHub repo
- Build command: `npm run build`
- Output directory: `dist`

### B) GitHub Pages (free + custom domain)
- If deploying to GitHub Pages under a repo (not username.github.io):
  edit `vite.config.ts` and set:
  `base: '/REPO_NAME/'`
- Build and publish `dist` via GitHub Actions or manually.

## Custom domain
Both Cloudflare Pages and GitHub Pages allow custom domains by adding DNS records.
