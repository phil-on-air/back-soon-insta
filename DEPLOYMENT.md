# GitHub Pages Deployment Guide

This project is configured to be deployed on GitHub Pages.

## Prerequisites

1. Make sure your repository is pushed to GitHub
2. Install dependencies: `npm install`

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Update the homepage URL** in `package.json`:
   ```json
   "homepage": "https://[your-username].github.io/back-soon-insta"
   ```
   Replace `[your-username]` with your actual GitHub username.

2. **Install gh-pages** (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Save

### Option 2: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Push the dist folder** to a `gh-pages` branch:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

## Configuration Details

- **Base Path**: The Vite config is set to use `/back-soon-insta/` as the base path for production builds
- **Build Output**: Files are built to the `dist/` directory
- **Routing**: React Router is configured to work with static hosting

## Troubleshooting

- If assets don't load, check that the `homepage` field in `package.json` matches your repository name
- If routing doesn't work, ensure you're using the correct base path in the Vite config
- Clear browser cache if you see old versions after deployment

## Custom Domain

To use a custom domain:
1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure your domain's DNS settings
3. Update the `homepage` field in `package.json` to your custom domain 