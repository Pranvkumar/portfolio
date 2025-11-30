// Portfolio projects data
const projects = [
    // AI/ML Projects
    {
        id: 1,
        title: "Face Mask Detection System",
        category: ["ai", "cv"],
        description: "Real-time face mask detection using CNN and OpenCV. Trained on 32,000+ images with 98% accuracy.",
        technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "GPU Training"],
        features: [
            "Real-time webcam detection",
            "98% accuracy on test set",
            "GPU-accelerated training",
            "Multiple mask types detection"
        ],
        github: "https://github.com/Pranvkumar/coding",
        metrics: {
            accuracy: "98%",
            dataset: "32,000+ images",
            modelSize: "15MB"
        },
        image: "assets/face-mask.jpg"
    },
    {
        id: 2,
        title: "Engine Fault Detection",
        category: ["ai", "ml"],
        description: "Machine learning model for predictive maintenance using PCA and ensemble methods.",
        technologies: ["Python", "Scikit-learn", "Pandas", "PCA", "Random Forest"],
        features: [
            "Multiple ML algorithms comparison",
            "PCA for dimensionality reduction",
            "Visual analysis dashboard",
            "95% fault detection accuracy"
        ],
        github: "https://github.com/Pranvkumar/coding",
        metrics: {
            accuracy: "95%",
            features: "120+ sensors",
            models: "5 algorithms"
        },
        image: "assets/engine-fault.jpg"
    },
    {
        id: 3,
        title: "Vehicle Detection (YOLOv8)",
        category: ["ai", "cv"],
        description: "Real-time vehicle detection and counting system using YOLOv8 architecture.",
        technologies: ["Python", "YOLOv8", "PyTorch", "GPU Computing", "OpenCV"],
        features: [
            "Real-time vehicle tracking",
            "Multiple vehicle class detection",
            "Traffic flow analysis",
            "GPU-optimized inference"
        ],
        github: "https://github.com/Pranvkumar/coding",
        metrics: {
            fps: "30+ FPS",
            classes: "10 vehicle types",
            mAP: "89%"
        },
        image: "assets/vehicle-detection.jpg"
    },

    // Backend Projects
    {
        id: 4,
        title: "Student Management System v4.0",
        category: ["backend", "fullstack", "database"],
        description: "Enterprise-grade student management system with advanced security features and role-based access.",
        technologies: ["Python", "Flask", "MySQL", "JWT", "REST API"],
        features: [
            "Password hashing (PBKDF2-SHA256)",
            "Role-based authentication (Admin/Student/Faculty)",
            "CSV export functionality",
            "Email notification system",
            "Session management & security",
            "40+ database indexes for performance"
        ],
        github: "https://github.com/Pranvkumar/coding",
        metrics: {
            routes: "80+ endpoints",
            tables: "10 normalized tables",
            lines: "1,200+ lines"
        },
        demo: "http://localhost:5000",
        image: "assets/student-system.jpg"
    },
    {
        id: 5,
        title: "Flight Price Prediction Engine",
        category: ["backend", "fullstack", "ai"],
        description: "Multi-modal travel booking system with real-time price predictions using machine learning.",
        technologies: ["Python", "FastAPI", "React", "SQLAlchemy", "TypeScript"],
        features: [
            "5 travel modes (Air, Rail, Bus, Cab, Hotel)",
            "Real-time price forecasting",
            "RESTful API architecture",
            "15-table normalized database",
            "Redux state management",
            "Material-UI components"
        ],
        github: "https://github.com/Pranvkumar/coding",
        metrics: {
            modes: "5 travel types",
            routes: "60+ API endpoints",
            frontend: "React + TypeScript"
        },
        demo: "http://localhost:8000",
        image: "assets/flight-price.jpg"
    },

    // Database Projects
    {
        id: 6,
        title: "MySQL Database Labs (DBMS)",
        category: ["database"],
        description: "Comprehensive collection of MySQL database experiments covering advanced concepts.",
        technologies: ["MySQL", "SQL", "Database Design", "Normalization", "Optimization"],
        features: [
            "Database schema design (3NF)",
            "Complex SQL joins and subqueries",
            "Stored procedures & functions",
            "Triggers and views",
            "Performance optimization",
            "ER diagram design"
        ],
        github: "https://github.com/Pranvkumar/coding",
        metrics: {
            experiments: "12+ labs",
            tables: "50+ tables",
            queries: "200+ SQL queries"
        },
        image: "assets/database.jpg"
    },
    {
        id: 7,
        title: "Database Performance Optimization",
        category: ["database"],
        description: "Advanced indexing and query optimization techniques for large-scale databases.",
        technologies: ["MySQL", "Query Optimization", "Indexing", "Performance Tuning"],
        features: [
            "40+ strategic indexes",
            "Composite index design",
            "Query execution plan analysis",
            "50-80% performance improvement",
            "JOIN optimization"
        ],
        github: "https://github.com/Pranvkumar/coding",
        metrics: {
            speedup: "50-80%",
            indexes: "40+ indexes",
            tables: "10 optimized"
        },
        image: "assets/optimization.jpg"
    },

    // Additional Projects
    {
        id: 8,
        title: "Lung Cancer Prediction Model",
        category: ["ai", "ml"],
        description: "Machine learning model for early lung cancer detection using clinical data.",
        technologies: ["Python", "Scikit-learn", "XGBoost", "Feature Engineering"],
        features: [
            "Multiple ML algorithms",
            "Feature importance analysis",
            "Cross-validation",
            "High prediction accuracy"
        ],
        github: "https://github.com/Pranvkumar/coding",
        metrics: {
            accuracy: "92%",
            features: "15+ clinical markers",
            models: "4 algorithms"
        },
        image: "assets/lung-cancer.jpg"
    },
    {
        id: 9,
        title: "Used Car Price Prediction",
        category: ["ai", "ml"],
        description: "Regression model for predicting used car prices with brand encoding and feature engineering.",
        technologies: ["Python", "Pandas", "Scikit-learn", "Feature Engineering"],
        features: [
            "Brand and model encoding",
            "Feature scaling and transformation",
            "Multiple regression algorithms",
            "R² score > 0.85"
        ],
        github: "https://github.com/Pranvkumar/coding",
        metrics: {
            r2Score: "0.87",
            features: "20+ attributes",
            dataset: "10,000+ cars"
        },
        image: "assets/car-price.jpg"
    },
    {
        id: 10,
        title: "DAA Algorithm Implementations",
        category: ["algorithm"],
        description: "Design and Analysis of Algorithms - implementations in C and Python.",
        technologies: ["C", "Python", "Algorithms", "Complexity Analysis"],
        features: [
            "Sorting algorithms",
            "Graph algorithms",
            "Dynamic programming",
            "Greedy algorithms",
            "Time complexity analysis"
        ],
        github: "https://github.com/Pranvkumar/coding",
        metrics: {
            algorithms: "20+ implementations",
            languages: "C & Python",
            complexity: "Analysis included"
        },
        image: "assets/algorithms.jpg"
    }
];

// Typing animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Full Stack Developer", "AI/ML Engineer", "Database Architect", "Problem Solver"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
    loadProjects('all');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active section highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        loadProjects(filter);
    });
});

function loadProjects(filter) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    let filteredProjects = projects;
    if (filter !== 'all') {
        filteredProjects = projects.filter(project => project.category.includes(filter));
    }
    
    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const techBadges = project.technologies.map(tech => 
        `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    const featuresList = project.features.map(feature => 
        `<li><i class="fas fa-check"></i> ${feature}</li>`
    ).join('');
    
    const metricsHTML = Object.entries(project.metrics).map(([key, value]) => 
        `<div class="metric">
            <span class="metric-value">${value}</span>
            <span class="metric-label">${key}</span>
        </div>`
    ).join('');
    
    const categoryBadge = project.category[0].toUpperCase();
    
    card.innerHTML = `
        <div class="project-header">
            <div class="project-category">${categoryBadge}</div>
            <h3>${project.title}</h3>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">${techBadges}</div>
        <div class="project-features">
            <h4>Key Features:</h4>
            <ul>${featuresList}</ul>
        </div>
        <div class="project-metrics">${metricsHTML}</div>
        <div class="project-links">
            <a href="${project.github}" target="_blank" class="project-btn">
                <i class="fab fa-github"></i> View Code
            </a>
            ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-btn">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>` : ''}
        </div>
    `;
    
    return card;
}

// Contact form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    alert(`Thank you ${name}! Your message has been received. I'll get back to you soon!`);
    contactForm.reset();
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .stat-item').forEach(el => {
    observer.observe(el);
});
