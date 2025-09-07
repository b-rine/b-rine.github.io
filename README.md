# My Portfolio Website

A minimal, interactive portfolio website inspired by modern design principles, featuring a 3D cube that follows your cursor. Built with vanilla HTML, CSS, and ThreeJS for optimal performance and GitHub Pages compatibility.

## Features

- **Minimal Design**: Clean, typography-focused layout 
- **Interactive 3D Element**: ThreeJS-powered cube that responds to mouse movement
- **GitHub Pages Ready**: Optimized for static hosting with automated deployment
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle fade-in effects and hover interactions
- **Organized Sections**: About Me, Contact Me, Tech Stack, and Projects

## Quick Start

1. **Clone or download** this repository to your local machine
2. **Navigate** to the project directory:
   ```bash
   cd my-portfolio
   ```
3. **Start a local server**:
   ```bash
   npm run start
   ```
   Or manually:
   ```bash
   python3 -m http.server 8000
   ```
4. **Open your browser** and go to `http://localhost:8000`

## Customization

### Personal Information
Edit the following in `index.html`:
- Replace "Your Full Name" with your actual name
- Update contact information in the Contact Me section
- Modify the About Me content
- Update your tech stack and skills
- Add your actual projects with links

### Styling
Modify `styles.css` to:
- Change colors (current theme uses purple gradient)
- Adjust fonts and typography
- Modify layout and spacing
- Customize the responsive breakpoints

### 3D Cube Behavior
Edit `script.js` to:
- Change cube color, size, or animation speed
- Modify mouse tracking sensitivity
- Add different 3D objects or effects
- Adjust the pulsing and rotation effects

## File Structure

```
my-portfolio/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and layout
├── script.js           # JavaScript and ThreeJS code
├── package.json        # Project configuration
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality
- **ThreeJS**: 3D graphics and animations
- **CDN**: ThreeJS loaded via CDN for simplicity

## Browser Compatibility

This portfolio works on all modern browsers including:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Deployment

### GitHub Pages (Recommended)
This portfolio is optimized for GitHub Pages with automated deployment:

1. **Fork or create a new repository** from this template
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `root`
3. **Automatic deployment**: The included GitHub Action will deploy your site automatically
4. **Your site will be live** at `https://yourusername.github.io/repository-name`

### Manual GitHub Pages Setup
If you prefer manual deployment:
1. Push your code to the `main` branch
2. GitHub Pages will automatically serve your `index.html`
3. No build process needed - it's a static site!

### Netlify
1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Your site will be deployed automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Performance Tips

- The ThreeJS library is loaded via CDN for faster loading
- Images are optimized for web (add your own project images)
- CSS animations use GPU acceleration
- Lazy loading is implemented for smooth scrolling

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

If you find bugs or want to improve this template, feel free to submit issues or pull requests.

---

**Happy coding!** 🚀
