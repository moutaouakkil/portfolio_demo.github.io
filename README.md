# Portfolio Demo

A modern, responsive personal portfolio website built with Jekyll and GitHub Pages.

## Live Demo
[View the live site here](https://moutaouakkil.github.io/portfolio_demo.github.io/)

## Features
- Modern, mobile-friendly design
- Animated hero and call-to-action sections
- Project and skills showcase
- Services with detailed subpages
- Contact form and social links
- Easy customization
- Built with Jekyll for GitHub Pages
- Automated CI/CD with GitHub Actions
  - Test workflow runs on every push and pull request
  - Automated deployment to GitHub Pages
  - Dependency caching for faster builds
  - Jekyll configuration validation

## Project Structure
```
portfolio_demo.github.io/
├── _layouts/           # Jekyll HTML layouts
├── assets/            # CSS, JS, images
│   ├── css/          # Stylesheets
│   ├── js/           # JavaScript files
│   └── images/       # Site images
├── services/         # Service subpages
├── .github/          # GitHub configuration
│   └── workflows/    # GitHub Actions workflows
├── about.md         # About page
├── contact.md       # Contact page
├── index.md         # Home page
├── projects.md      # Projects page
├── services.md      # Main services page
├── _config.yml      # Jekyll configuration
├── Gemfile         # Ruby dependencies
└── README.md       # Documentation
```

## Getting Started

### 1. **Clone the repository**
```bash
git clone https://github.com/moutaouakkil/portfolio_demo.github.io.git
cd portfolio_demo.github.io
```

### 2. **Install dependencies**
Make sure you have Ruby and Bundler installed. Then run:
```bash
bundle install
```

### 3. **Run locally**
```bash
bundle exec jekyll serve
```
Visit [http://127.0.0.1:4000/](http://127.0.0.1:4000/) in your browser.

## Deployment
This site uses GitHub Actions for automated testing and deployment to GitHub Pages. The workflow includes:

### CI/CD Pipeline
1. **Test Job**:
   - Runs on every push and pull request
   - Validates Jekyll configuration
   - Checks build process
   - Ensures critical files are generated

2. **Deploy Job**:
   - Only runs after successful tests
   - Builds the site in production mode
   - Deploys automatically to GitHub Pages
   - Uses caching for faster builds

### Manual Deploy
The site deploys automatically on pushes to the `main` branch. You can also trigger a deployment manually:
1. Go to your repository on GitHub
2. Navigate to Actions tab
3. Select "Jekyll site CI/CD"
4. Click "Run workflow"

Your site will be live at:
```
https://<your-github-username>.github.io/portfolio_demo.github.io/
```

## Credits
- [Jekyll](https://jekyllrb.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

## License
This project is open source and available under the [MIT License](LICENSE).
