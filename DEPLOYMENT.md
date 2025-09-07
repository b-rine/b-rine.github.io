# Deployment Guide for b-rine.github.io

## 🚀 Replace Your Current Portfolio

Since you already have a live site at [b-rine.github.io](https://b-rine.github.io), here's how to replace it with your new minimal portfolio:

### Option 1: Direct Replacement (Recommended)

1. **Backup your current site** (optional but recommended):
   ```bash
   # Clone your current repository to a backup location
   git clone https://github.com/b-rine/b-rine.github.io.git backup-portfolio
   ```

2. **Navigate to your existing repository**:
   ```bash
   cd path/to/b-rine.github.io
   ```

3. **Replace all files** with the new portfolio:
   ```bash
   # Remove all current files (except .git folder)
   rm -rf * .[^.]*
   
   # Copy new portfolio files
   cp /home/brian/projects/my-portfolio/* .
   cp /home/brian/projects/my-portfolio/.github . -r
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Replace portfolio with new minimal design"
   git push origin main
   ```

### Option 2: Fresh Start

1. **Delete current repository content**:
   - Go to [your repository](https://github.com/b-rine/b-rine.github.io)
   - Delete all files via GitHub interface

2. **Upload new files**:
   - Upload all files from `/home/brian/projects/my-portfolio/`
   - Make sure to include the `.github` folder for automated deployment

### Files to Deploy

Make sure these files are in your `b-rine.github.io` repository:

```
b-rine.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── styles.css
├── script.js
├── package.json
├── README.md
└── DEPLOYMENT.md (this file)
```

### What Happens After Deployment

1. **GitHub Pages will automatically serve** your `index.html`
2. **Your site will be live** at `https://b-rine.github.io`
3. **The GitHub Action** will handle any future deployments automatically
4. **Changes take 1-5 minutes** to appear live

### Customization After Deployment

Update these in your live repository:

1. **Personal Information** (already updated):
   - Name: "brian dot dev"
   - GitHub links: Updated to b-rine
   - Contact info: Update with your real email

2. **Projects**: Replace placeholder projects with your actual work
3. **Tech Stack**: Adjust skills and experience levels
4. **About Me**: Personalize the content

### Troubleshooting

- **Site not updating?** Check GitHub Actions tab in your repository
- **404 Error?** Ensure `index.html` is in the root directory
- **Styling issues?** Verify all CSS and JS files are properly linked

### Your New Portfolio Features

✅ **Minimal Design**: Clean, professional aesthetic  
✅ **Interactive 3D Cube**: Follows cursor movement  
✅ **Responsive**: Works on all devices  
✅ **Fast Loading**: Optimized for GitHub Pages  
✅ **Modern Typography**: Inter font with proper spacing  
✅ **Smooth Animations**: Subtle hover and scroll effects  

---

Your new portfolio is ready to go live! 🎉
