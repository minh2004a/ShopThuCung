# Complete GitHub Pages Deployment Guide

## Code Configuration

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ShopThuCung/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
```

### package.json
```json
{
  "name": "shop-thu-cung",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://minh2004a.github.io/ShopThuCung",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "framer-motion": "^11.3.28",
    "react-helmet-async": "^2.0.5",
    "react-icons": "^5.3.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "vite": "^5.4.2"
  }
}
```

### .github/workflows/deploy.yml
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### public/404.html
```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="utf-8" />
    <title>Shop Thú Cưng</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol +
          '//' +
          l.hostname +
          (l.port ? ':' + l.port : '') +
          l.pathname
            .split('/')
            .slice(0, 1 + pathSegmentsToKeep)
            .join('/') +
          '/?/' +
          l.pathname
            .slice(1)
            .split('/')
            .slice(pathSegmentsToKeep)
            .join('/')
            .replace(/&/g, '~and~') +
          (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
          l.hash
      );
    </script>
  </head>
  <body></body>
</html>
```

### index.html (Add to <head> section)
```html
<script type="text/javascript">
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) {
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

## Deployment Steps

### 1. Enable GitHub Pages
```
URL: https://github.com/minh2004a/ShopThuCung/settings/pages

Action:
- Under "Build and deployment"
- Source: GitHub Actions
```

### 2. Configure Workflow Permissions
```
URL: https://github.com/minh2004a/ShopThuCung/settings/actions

Actions:
- Scroll to "Workflow permissions"
- Select: "Read and write permissions"
- Check: "Allow GitHub Actions to create and approve pull requests"
- Click: "Save"
```

### 3. Trigger Deployment
```bash
git commit --allow-empty -m "Trigger deployment"
git push
```

### 4. Monitor Deployment
```
URL: https://github.com/minh2004a/ShopThuCung/actions

Action:
- Watch workflow status
- Wait for green checkmark
```

### 5. Access Deployed Site
```
URL: https://minh2004a.github.io/ShopThuCung/
```

## Verification Commands

### Test Build Locally
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Check Git Status
```bash
git status
```

### View Commit Log
```bash
git log --oneline -5
```

## Future Updates

### Deploy Changes
```bash
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

### Rebuild Site
```bash
npm run build
git add dist -f
git commit -m "Rebuild"
git push
```

### Force Workflow Run
```bash
git commit --allow-empty -m "Trigger workflow"
git push
```

### Clear and Rebuild
```bash
rm -rf dist node_modules
npm install
npm run build
```

## Deployment URLs

**Repository:** https://github.com/minh2004a/ShopThuCung

**Live Site:** https://minh2004a.github.io/ShopThuCung/

**Actions:** https://github.com/minh2004a/ShopThuCung/actions

**Settings:** https://github.com/minh2004a/ShopThuCung/settings/pages

## Files Modified

```
✓ vite.config.js
✓ package.json
✓ index.html
```

## Files Created

```
✓ .github/workflows/deploy.yml
✓ public/404.html
✓ .gitattributes
```

## Commit History

```
54192ab Configure GitHub Pages deployment
79ca11a first commit
```

## Status

```
✓ Code configured
✓ Files committed
✓ Changes pushed to GitHub
→ Pending: Enable GitHub Pages in settings
→ Pending: Configure workflow permissions
→ Pending: Monitor first deployment
```
