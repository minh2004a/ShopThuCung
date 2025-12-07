# Step-by-Step Deployment Instructions

## Execute These Commands in Order

### 1. Stage All Files
```bash
git add .
```

### 2. Commit Changes
```bash
git commit -m "$(cat <<'EOF'
Configure GitHub Pages deployment

- Update vite.config.js with base URL '/ShopThuCung/'
- Add build configuration for GitHub Pages
- Create GitHub Actions workflow for automatic deployment
- Add 404.html for client-side routing support
- Update index.html with redirect script
- Add deployment scripts to package.json
- Create comprehensive deployment documentation

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

### 3. Create GitHub Repository
Execute on GitHub:
- Navigate to https://github.com/new
- Repository name: `ShopThuCung`
- Visibility: Public
- Do NOT check "Initialize this repository with a README"
- Click "Create repository"

### 4. Add Remote Origin
```bash
git remote add origin https://github.com/YOUR_USERNAME/ShopThuCung.git
```
Replace `YOUR_USERNAME` with your actual GitHub username.

### 5. Rename Branch to Main
```bash
git branch -M main
```

### 6. Push to GitHub
```bash
git push -u origin main
```

### 7. Enable GitHub Pages
Execute on GitHub:
1. Navigate to repository Settings
2. Click "Pages" in left sidebar
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. Leave other settings as default

### 8. Verify Workflow Permissions
Execute on GitHub:
1. Navigate to Settings > Actions > General
2. Scroll to "Workflow permissions"
3. Select "Read and write permissions"
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Click "Save"

### 9. Monitor Deployment
Execute on GitHub:
1. Navigate to "Actions" tab in repository
2. Watch for "Deploy to GitHub Pages" workflow
3. Wait for green checkmark (approximately 2-5 minutes)

### 10. Access Deployed Site
```
https://YOUR_USERNAME.github.io/ShopThuCung/
```
Replace `YOUR_USERNAME` with your actual GitHub username.

## Future Updates

After making code changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Actions will automatically rebuild and redeploy (30-60 seconds).

## Verification Commands

### Test Build Locally
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
Then visit: http://localhost:4173

### Check Git Status
```bash
git status
```

### View Git Log
```bash
git log --oneline -5
```

### Check Remote
```bash
git remote -v
```

## Troubleshooting Commands

### If Build Fails
```bash
npm run build
```
Review error messages and fix issues.

### If Remote Already Exists
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/ShopThuCung.git
```

### Force Push (Use with Caution)
```bash
git push -f origin main
```

### View Workflow Logs
On GitHub:
- Go to Actions tab
- Click on the workflow run
- Click on job name to see detailed logs

## Files Changed Summary

Modified:
- vite.config.js
- package.json
- index.html

Created:
- .github/workflows/deploy.yml
- public/404.html
- .gitattributes
- DEPLOYMENT.md
- DEPLOY_STEPS.md

---

Follow steps 1-10 in order for successful deployment.
