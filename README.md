# Personal Portfolio - Pranvkumar

**Live Demo:** [https://pranvkumar.github.io/portfolio/](https://pranvkumar.github.io/portfolio/)

A modern, responsive portfolio website showcasing my expertise in AI/ML, Full-Stack Development, DevOps & Cloud, and Database Engineering.

## Features

### Design
- **Modern Dark Theme** with gradient accents
- **Glassmorphism** effects on cards and sections
- **3D Particle Background** powered by Three.js
- **GSAP Scroll Animations** with ScrollTrigger
- **Vanilla Tilt** interactive card effects
- **Smooth Scrolling** navigation
- **Responsive Design** for all devices
- **Custom Cursor** and glitch text effects

### Sections
1. **Hero** - Dynamic typing animation showing roles (Full Stack Developer, AI/ML Engineer, DevOps & Cloud Architect, Database Engineer, Problem Solver)
2. **About** - Professional summary with key statistics
3. **Skills** - 4 categories with progress indicators:
   - AI/ML & Data Science
   - Backend Development
   - DevOps & Cloud
   - Frontend Development
4. **Projects** - 11 featured projects with filtering by category (AI/ML, Backend, Database, Full Stack, DevOps, Game Dev)
5. **Contact** - Contact form with social media links

## Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** (Vanilla) - Interactive functionality

### Libraries
- **Three.js** r128 - 3D particle background
- **GSAP** 3.12.2 + ScrollTrigger - Scroll animations
- **VanillaTilt** 1.8.1 - Card tilt effects
- **Font Awesome** 6.4.0 - Icons

### Styling Features
- CSS Variables for theming
- Flexbox & Grid layouts
- Custom animations (@keyframes)
- Media queries for responsiveness
- Backdrop filters for glassmorphism
- Gradient text effects

## Project Structure

```
Portfolio/
├── index.html    # Main HTML structure
├── script.js     # JavaScript functionality
├── style.css     # CSS styling
├── README.md     # This file
└── assets/       # Images and resources
```

## Featured Projects

### AI/ML Projects
1. **Face Mask Detection** - MobileNetV2-based real-time detector trained on 7,553 images with TensorFlow/Keras and OpenCV
2. **MNIST Neural Network from Scratch** - 98.52% accuracy handwritten digit classifier built with pure NumPy (no TF/Keras)

### Full-Stack & Backend
3. **Smart Financial Advisor** - FastAPI backend with Finnhub API integration and AI-powered analysis
4. **Flight Price Prediction Engine** - React + TypeScript frontend with FastAPI backend and ML models
5. **Student Management System v4.0** - Flask app with MySQL, 80+ API endpoints, role-based access

### DevOps & Cloud
6. **ASH-Fabric: Self-Healing Cloud Infrastructure** - Autonomous microservices platform with 3 AI agents, NATS messaging, Docker orchestration, Next.js dashboard, and automated incident remediation

### Database & Systems
7. **MySQL & MongoDB Database Labs** - 17+ experiments covering joins, views, triggers, cursors, PL/SQL, indexing, and MongoDB

### AI & Full-Stack
8. **FinMind: AI-Powered Finance Manager** - AI personal finance manager with receipt scanning, smart categorization, and LLM-powered financial coaching
9. **SyncWave: Real-Time Collaborative Editor** - CRDT-based real-time collaborative editor with offline-first architecture, live cursors, and rich text editing
10. **CORSAIR: Ocean Hazard Detection System** - Intelligent ocean hazard detection platform with NLP monitoring and AI risk assessment (Smart India Hackathon 2024)

### Game Development
11. **Global Game Jam 2025** - Unity game with custom shaders developed during 48-hour Global Game Jam challenge

## Local Development

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/Pranvkumar/portfolio.git
cd portfolio
```

2. **Run locally:**
```bash
# Using Python's built-in server
python -m http.server 8000

# Or simply open index.html in your browser
```

3. **Visit:** `http://localhost:8000`

### Customization

#### Update Projects
Edit the `projects` array in `script.js`:
```javascript
const projects = [
    {
        id: 1,
        title: "Your Project",
        category: "ai", // ai, backend, database, fullstack, devops
        description: "Project description",
        technologies: ["Tech1", "Tech2"],
        features: ["Feature 1", "Feature 2"],
        metrics: ["Metric 1", "Metric 2"],
        github: "https://github.com/...",
        demo: "https://..."
    }
];
```

#### Change Theme Colors
Update CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --background: #0f0f1e;
    --card-bg: #16213e;
}
```

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#667eea` | Blue-Purple accent |
| Secondary | `#764ba2` | Purple accent |
| Background | `#0f0f1e` | Dark Navy |
| Card BG | `#16213e` | Navy Blue |
| Text | `#fff` | White |
| Text Secondary | `#b8b8d0` | Light Gray |

## Performance

- Vanilla JavaScript (no frameworks, lightweight)
- Optimized CSS animations with GPU acceleration
- Three.js particle system with efficient rendering
- Responsive images and modern design
- Fast loading times
- Mobile-optimized

## Deployment

Deployed on **GitHub Pages** at:
**[https://pranvkumar.github.io/portfolio/](https://pranvkumar.github.io/portfolio/)**

### Deploy Your Own

1. Fork this repository
2. Update contact information in `index.html`
3. Enable GitHub Pages in Settings → Pages
4. Choose branch `main` and folder `/`
5. Your site will be live at `https://yourusername.github.io/portfolio/`

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Pranvkumar Suhas Kshirsagar**

- Portfolio: [pranvkumar.github.io/portfolio](https://pranvkumar.github.io/portfolio/)
- LinkedIn: [Pranvkumar Suhas Kshirsagar](https://www.linkedin.com/in/pranvkumar-suhas-kshirsagar-348b04325/)
- GitHub: [@Pranvkumar](https://github.com/Pranvkumar)
- Email: pranavkshirsagar.409@gmail.com

## Acknowledgments

- Font: Google Fonts (Poppins)
- Icons: Font Awesome
- 3D Background: Three.js
- Animations: GSAP
- Card Effects: VanillaTilt

---

**Last Updated**: February 2026
