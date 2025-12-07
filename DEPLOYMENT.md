# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed locally
- Repository created on GitHub named `ShopThuCung`

## Configuration Files

### 1. vite.config.js
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

### 2. package.json (scripts section)
```json
{
  "homepage": "https://huynh.github.io/ShopThuCung",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. .github/workflows/deploy.yml
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

### 4. public/404.html
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

### 5. index.html (add redirect script)
Add this script in the `<head>` section before the title:
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

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Pet e-commerce website"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `ShopThuCung`
3. Set to Public
4. Do NOT initialize with README
5. Click "Create repository"

### Step 3: Link Local Repository to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/ShopThuCung.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages" in left sidebar
3. Under "Build and deployment":
   - Source: GitHub Actions
4. Save changes

### Step 5: Trigger Deployment
The GitHub Actions workflow will automatically run when you push to main branch.

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

### Step 6: Monitor Deployment
1. Go to repository "Actions" tab
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait for completion (green checkmark)

### Step 7: Access Deployed Site
Visit: `https://YOUR_USERNAME.github.io/ShopThuCung/`

## Manual Deployment (Alternative)

If you prefer manual deployment using gh-pages:

### Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Deploy
```bash
npm run deploy
```

This will:
1. Run `npm run build`
2. Deploy the `dist` folder to `gh-pages` branch
3. Make site available at GitHub Pages URL

## Troubleshooting

### Blank Page After Deployment
- Check that `base: '/ShopThuCung/'` is set in vite.config.js
- Verify repository name matches the base path
- Clear browser cache

### 404 Errors on Refresh
- Ensure 404.html is in public folder
- Verify redirect script is in index.html
- Check GitHub Pages is enabled

### Build Fails
```bash
npm run build
```
Fix any errors locally before pushing

### Workflow Permissions Error
1. Go to Settings > Actions > General
2. Scroll to "Workflow permissions"
3. Select "Read and write permissions"
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Save

## Update Deployment

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Actions will automatically rebuild and redeploy.

## Custom Domain (Optional)

### Add Custom Domain
1. Create CNAME file in public folder:
```
yourdomain.com
```

2. Configure DNS:
   - Add CNAME record pointing to: `YOUR_USERNAME.github.io`

3. In GitHub Settings > Pages:
   - Enter custom domain
   - Enable "Enforce HTTPS"

### Update vite.config.js
```javascript
base: '/',  // Change from '/ShopThuCung/'
```

## Local Testing

Test production build locally:
```bash
npm run build
npm run preview
```

Visit: http://localhost:4173

## Important Notes

- Replace `YOUR_USERNAME` with your GitHub username
- Repository must be public for free GitHub Pages
- First deployment may take 2-5 minutes
- Subsequent deployments are faster (30-60 seconds)
- Changes may take 1-2 minutes to appear after deployment
- GitHub Pages serves from root of `dist` folder
- All asset paths are automatically handled by Vite base config

## Files Modified for Deployment

1. ✅ vite.config.js - Added base URL and build config
2. ✅ package.json - Added homepage and deploy scripts
3. ✅ .github/workflows/deploy.yml - Created GitHub Actions workflow
4. ✅ public/404.html - Created for client-side routing
5. ✅ index.html - Added redirect script

## Verification Checklist

- [ ] All files committed to repository
- [ ] Pushed to GitHub main branch
- [ ] GitHub Actions workflow completed successfully
- [ ] GitHub Pages enabled in repository settings
- [ ] Site accessible at GitHub Pages URL
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Images and assets load
- [ ] Mobile responsive layout works
- [ ] No console errors

---

Deployment configured successfully! 🚀
