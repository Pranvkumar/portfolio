# Personal Portfolio - Pranvkumar

🌐 **Live Demo:** [https://pranvkumar.github.io/portfolio/](https://pranvkumar.github.io/portfolio/)

A modern, responsive portfolio website showcasing my expertise in AI/ML, Backend Development, Database Engineering, and Full-Stack Development.

## 🌟 Features

### Design
- **Modern Dark Theme** with gradient accents
- **Glassmorphism** effects on cards and sections
- **Animated Particles** in hero section
- **Smooth Scrolling** navigation
- **Responsive Design** for all devices
- **Interactive Animations** on scroll and hover

### Sections
1. **Hero** - Dynamic typing animation showing roles (Full Stack Developer, AI/ML Engineer, Database Architect, Problem Solver)
2. **About** - Professional summary with key statistics
3. **Skills** - 4 categories with progress indicators:
   - AI/ML & Data Science
   - Backend Development
   - Database & DevOps
   - Frontend Development
4. **Projects** - 10+ featured projects with filtering by category
5. **Contact** - Contact form with social media links

## 🚀 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** (Vanilla) - Interactive functionality

### Styling Features
- CSS Variables for theming
- Flexbox & Grid layouts
- Custom animations (@keyframes)
- Media queries for responsiveness
- Backdrop filters for glassmorphism
- Gradient text effects

## 📂 Project Structure

```
Portfolio/
├── index.html              # Main HTML structure
├── script.js               # JavaScript functionality
├── style.css               # CSS styling
├── gpu_training_demo.py    # GPU training demonstration
├── README.md               # This file
└── assets/                 # Images and resources (to be added)
```

## 🎯 Featured Projects

### AI/ML Projects
1. **Face Mask Detection** - Computer Vision model with 98% accuracy, trained on 32K images
2. **Engine Fault Detection** - ML classification with 95% accuracy using PCA
3. **Vehicle Detection YOLOv8** - Real-time object detection at 30+ FPS
4. **Lung Cancer Prediction** - ML classification with 92% accuracy
5. **Used Car Price Prediction** - Regression model with R² score of 0.87

### Backend & Full-Stack
6. **Student Management System v4.0** - Flask application with 80+ routes, role-based access
7. **Flight Price Prediction Engine** - FastAPI backend with React frontend

### Database Projects
8. **MySQL Database Labs** - 12+ comprehensive SQL experiments
9. **Database Performance Optimization** - 40+ indexes for query optimization

### Algorithms
10. **Data Structures & Algorithms** - 20+ algorithm implementations

## 🖥️ GPU Training Demo

The portfolio includes a GPU training demonstration script (`gpu_training_demo.py`) that showcases:
- GPU detection and utilization (CUDA)
- CNN model training with PyTorch
- Performance metrics tracking
- CPU vs GPU speed comparison
- Real-time memory monitoring

### Running the GPU Demo

```bash
# Install dependencies
pip install torch torchvision numpy

# Run the demonstration
python gpu_training_demo.py
```

**Requirements:**
- NVIDIA GPU with CUDA support
- CUDA Toolkit 11.8 or higher
- PyTorch with CUDA support

## 🛠️ Local Development

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
        category: "ai", // ai, backend, database, fullstack
        description: "Project description",
        technologies: ["Tech1", "Tech2"],
        features: ["Feature 1", "Feature 2"],
        metrics: ["Metric 1", "Metric 2"],
        github: "https://github.com/...",
        demo: "https://..."
    }
];
```

#### Update Skills
Modify the skills section in `index.html` and adjust progress percentages in `style.css`.

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

#### Update Contact Information
Replace placeholder links in `index.html`:
```html
<a href="mailto:your.email@example.com">
<a href="https://github.com/your-username">
<a href="https://linkedin.com/in/your-profile">
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎨 Color Palette

- **Primary**: `#667eea` (Blue-Purple)
- **Secondary**: `#764ba2` (Purple)
- **Background**: `#0f0f1e` (Dark Navy)
- **Card Background**: `#16213e` (Navy Blue)
- **Text**: `#fff` (White)
- **Text Secondary**: `#b8b8d0` (Light Gray)

## ⚡ Performance

- ✅ Vanilla JavaScript (no frameworks, lightweight)
- ✅ Optimized CSS animations with GPU acceleration
- ✅ Responsive images and modern design
- ✅ Fast loading times
- ✅ Mobile-optimized

## 📱 Responsive Design

- **Desktop**: 1200px and above - Full featured experience
- **Tablet**: 768px - 1199px - Optimized layout
- **Mobile**: Below 768px - Touch-friendly interface

## 🚀 Deployment

This portfolio is deployed on **GitHub Pages** at:
**[https://pranvkumar.github.io/portfolio/](https://pranvkumar.github.io/portfolio/)**

### Deploy Your Own

1. Fork this repository
2. Update contact information in `index.html`
3. Enable GitHub Pages in Settings → Pages
4. Choose branch `main` and folder `/`
5. Your site will be live at `https://yourusername.github.io/portfolio/`

## 📈 Future Enhancements

- [ ] Add project images/screenshots
- [ ] Implement dark/light theme toggle
- [ ] Add blog section
- [ ] Integrate contact form backend
- [ ] Add resume download functionality
- [ ] Implement lazy loading for images
- [ ] Add SEO meta tags
- [ ] Create sitemap.xml
- [ ] Add Google Analytics
- [ ] Implement GSAP for advanced animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Pranvkumar Suhas Kshirsagar**

- 🌐 Portfolio: [pranvkumar.github.io/portfolio](https://pranvkumar.github.io/portfolio/)
- 💼 LinkedIn: [Pranvkumar Suhas Kshirsagar](https://www.linkedin.com/in/pranvkumar-suhas-kshirsagar-348b04325/)
- 🐙 GitHub: [@Pranvkumar](https://github.com/Pranvkumar)
- 📧 Email: pranavkshirsagar.409@gmail.com

## 🙏 Acknowledgments

- Font: Google Fonts (Poppins)
- Icons: Font Awesome
- Inspiration: Modern portfolio design trends

---

**Last Updated**: November 30, 2025
