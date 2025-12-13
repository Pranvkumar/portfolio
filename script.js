// ============================================
// PORTFOLIO - Enhanced Interactive JavaScript
// 3D Effects, Animations & Interactions
// ============================================

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
        github: "https://github.com/Pranvkumar/coding/tree/main/Projects/Face_Mask_Detection",
        metrics: {
            accuracy: "98%",
            dataset: "32,000+ images",
            modelSize: "15MB"
        },
        image: "assets/images/face-mask.jpg"
    },
    {
        id: 2,
        title: "Smart Financial Advisor",
        category: ["fullstack", "ai", "backend"],
        description: "AI-powered financial advisor with real-time stock tracking, portfolio analysis, and personalized recommendations using Finnhub API.",
        technologies: ["Python", "FastAPI", "JavaScript", "Finnhub API", "Chart.js", "CSS3"],
        features: [
            "Real-time stock price tracking",
            "AI-powered investment recommendations",
            "Portfolio performance analytics",
            "User authentication with sessions",
            "Search history tracking",
            "Liquid gradient animated UI",
            "Responsive glassmorphism design"
        ],
        github: "https://github.com/Pranvkumar/coding/tree/main/Projects/Smart_Financial_Advisor",
        metrics: {
            api: "Finnhub Real-time",
            auth: "Session-based",
            ui: "Glassmorphism"
        },
        demo: "http://localhost:8000",
        image: "assets/images/smart-financial.jpg"
    },
    {
        id: 3,
        title: "Flight Price Prediction Engine",
        category: ["fullstack", "ai", "backend"],
        description: "Multi-modal travel booking system with real-time price predictions, dynamic analytics dashboard, and AI-powered forecasting.",
        technologies: ["Python", "FastAPI", "React", "TypeScript", "Redux Toolkit", "MUI", "SQLAlchemy"],
        features: [
            "Dynamic flight search with autocomplete",
            "Real-time price trend indicators",
            "Interactive analytics dashboard",
            "6-month demand forecasting",
            "Competitor pricing analysis",
            "Route performance metrics",
            "Favorites & compare functionality",
            "Material-UI glassmorphism design"
        ],
        github: "https://github.com/Pranvkumar/coding/tree/main/Projects/Flight-Price-Engine",
        metrics: {
            modes: "5 travel types",
            routes: "60+ API endpoints",
            frontend: "React + TypeScript"
        },
        demo: "http://localhost:3000",
        image: "assets/images/flight-price.jpg"
    },
    {
        id: 4,
        title: "Student Management System v4.0",
        category: ["backend", "fullstack", "database"],
        description: "Enterprise-grade student management system with advanced security features, role-based access, and comprehensive reporting.",
        technologies: ["Python", "Flask", "MySQL", "JWT", "REST API", "JavaScript"],
        features: [
            "Password hashing (PBKDF2-SHA256)",
            "Role-based authentication (Admin/Student/Faculty)",
            "CSV export functionality",
            "Email notification system",
            "Session management & security",
            "40+ database indexes for performance",
            "Attendance tracking system",
            "Course management module"
        ],
        github: "https://github.com/Pranvkumar/coding/tree/main/Projects/Student_Management_System",
        metrics: {
            routes: "80+ endpoints",
            tables: "10 normalized tables",
            lines: "1,200+ lines"
        },
        demo: "http://localhost:5000",
        image: "assets/images/student-system.jpg"
    },
    {
        id: 5,
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
        image: "assets/images/engine-fault.jpg"
    },
    {
        id: 6,
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
        image: "assets/images/vehicle-detection.jpg"
    },

    // Database Projects
    {
        id: 7,
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
        github: "https://github.com/Pranvkumar/coding/tree/main/Database",
        metrics: {
            experiments: "12+ labs",
            tables: "50+ tables",
            queries: "200+ SQL queries"
        },
        image: "assets/images/database.jpg"
    },
    {
        id: 8,
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
        github: "https://github.com/Pranvkumar/coding/tree/main/Database",
        metrics: {
            speedup: "50-80%",
            indexes: "40+ indexes",
            tables: "10 optimized"
        },
        image: "assets/images/optimization.jpg"
    },

    // Additional Projects
    {
        id: 9,
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
        image: "assets/images/lung-cancer.jpg"
    },
    {
        id: 10,
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
        image: "assets/images/car-price.jpg"
    },
    {
        id: 11,
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
        github: "https://github.com/Pranvkumar/coding/tree/main/C",
        metrics: {
            algorithms: "20+ implementations",
            languages: "C & Python",
            complexity: "Analysis included"
        },
        image: "assets/images/algorithms.jpg"
    }
];

// ============================================
// THREE.JS 3D BACKGROUND SCENE
// ============================================

let scene, camera, renderer, particles, particlesMesh;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function init3DBackground() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    renderer = new THREE.WebGLRenderer({ 
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particle geometry
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0x667eea); // Primary
    const color2 = new THREE.Color(0x764ba2); // Secondary
    const color3 = new THREE.Color(0x00d4ff); // Neon blue

    for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 100;

        const colorChoice = Math.random();
        let color;
        if (colorChoice < 0.33) color = color1;
        else if (colorChoice < 0.66) color = color2;
        else color = color3;

        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });

    particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Add floating geometric shapes
    createFloatingGeometries();

    // Mouse movement listener
    document.addEventListener('mousemove', onDocumentMouseMove);
    window.addEventListener('resize', onWindowResize);

    animate3D();
}

function createFloatingGeometries() {
    const geometries = [
        new THREE.IcosahedronGeometry(3, 0),
        new THREE.OctahedronGeometry(2, 0),
        new THREE.TetrahedronGeometry(2, 0),
        new THREE.TorusGeometry(2, 0.5, 8, 16),
        new THREE.DodecahedronGeometry(2, 0)
    ];

    const material = new THREE.MeshBasicMaterial({
        color: 0x667eea,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });

    geometries.forEach((geo, i) => {
        const mesh = new THREE.Mesh(geo, material.clone());
        mesh.position.set(
            (Math.random() - 0.5) * 80,
            (Math.random() - 0.5) * 80,
            (Math.random() - 0.5) * 50
        );
        mesh.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            },
            floatSpeed: Math.random() * 0.02 + 0.01,
            floatOffset: Math.random() * Math.PI * 2
        };
        scene.add(mesh);
    });
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.05;
    mouseY = (event.clientY - windowHalfY) * 0.05;
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate3D() {
    requestAnimationFrame(animate3D);

    // Smooth camera follow mouse
    camera.position.x += (mouseX - camera.position.x) * 0.02;
    camera.position.y += (-mouseY - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    // Rotate particles
    if (particlesMesh) {
        particlesMesh.rotation.x += 0.0003;
        particlesMesh.rotation.y += 0.0005;
    }

    // Animate floating geometries
    scene.children.forEach(child => {
        if (child.userData && child.userData.rotationSpeed) {
            child.rotation.x += child.userData.rotationSpeed.x;
            child.rotation.y += child.userData.rotationSpeed.y;
            child.rotation.z += child.userData.rotationSpeed.z;
            child.position.y += Math.sin(Date.now() * child.userData.floatSpeed + child.userData.floatOffset) * 0.02;
        }
    });

    renderer.render(scene, camera);
}

// ============================================
// CUSTOM CURSOR
// ============================================

function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    // Check if it's a touch device
    if ('ontouchstart' in window) {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
        return;
    }

    let cursorX = 0, cursorY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        cursorDot.style.left = cursorX + 'px';
        cursorDot.style.top = cursorY + 'px';
    });

    // Smooth outline follow
    function animateOutline() {
        outlineX += (cursorX - outlineX) * 0.15;
        outlineY += (cursorY - outlineY) * 0.15;
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .stat-item, .filter-btn, .social-icon, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover');
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover');
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// ============================================
// LOADING SCREEN
// ============================================

function initLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (!loadingScreen) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            document.body.style.overflow = 'auto';
            
            // Initialize animations after load
            initScrollAnimations();
            animateProgressBars();
            initCounters();
        }, 1500);
    });
}

// Typing animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Full Stack Developer", "AI/ML Engineer", "Database Architect", "Problem Solver", "Creative Thinker"];
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

// ============================================
// SCROLL ANIMATIONS WITH GSAP
// ============================================

function initScrollAnimations() {
    // Reveal text animations
    const revealElements = document.querySelectorAll('.reveal-text');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // GSAP ScrollTrigger animations (if GSAP is available)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Skill cards stagger animation
        gsap.utils.toArray('.skill-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });

        // Section titles animation
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Stats animation
        gsap.utils.toArray('.stat-item').forEach((stat, i) => {
            gsap.from(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%'
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.2,
                ease: 'back.out(1.7)'
            });
        });
    }
}

// ============================================
// ANIMATED COUNTERS
// ============================================

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ============================================
// PROGRESS BARS ANIMATION
// ============================================

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.getAttribute('data-width');
                setTimeout(() => {
                    progress.style.width = width + '%';
                }, 200);
                progressObserver.unobserve(progress);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => progressObserver.observe(bar));
}

document.addEventListener("DOMContentLoaded", function() {
    // Initialize all features
    initLoadingScreen();
    init3DBackground();
    initCustomCursor();
    initMagneticButtons();
    initSkillCardGlow();
    initVanillaTilt();
    
    // Start typing animation
    if (textArray.length) setTimeout(type, newTextDelay + 250);
    loadProjects('all');
});

// ============================================
// MAGNETIC BUTTONS
// ============================================

function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.magnetic-btn');
    
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// ============================================
// SKILL CARD GLOW EFFECT
// ============================================

function initSkillCardGlow() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });
}

// ============================================
// VANILLA TILT INITIALIZATION
// ============================================

function initVanillaTilt() {
    if (typeof VanillaTilt === 'undefined') return;
    
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02
    });
}

// Smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect with parallax
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = currentScrollY;
    
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
    
    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && currentScrollY < window.innerHeight) {
        heroBackground.style.transform = `translateY(${currentScrollY * 0.3}px)`;
    }
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
    
    // Animate links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        links.forEach(l => l.style.animation = '');
    });
});

// Project filtering with animation
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        
        // Add ripple effect
        createRipple(btn, event);
        
        loadProjects(filter);
    });
});

// Ripple effect function
function createRipple(element, event) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

function loadProjects(filter) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    let filteredProjects = projects;
    if (filter !== 'all') {
        filteredProjects = projects.filter(project => project.category.includes(filter));
    }
    
    filteredProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
    
    // Re-initialize tilt for new cards
    initVanillaTilt();
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card tilt-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const techBadges = project.technologies.map(tech => 
        `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    const featuresList = project.features.slice(0, 4).map(feature => 
        `<li><i class="fas fa-check"></i> ${feature}</li>`
    ).join('');
    
    const metricsHTML = Object.entries(project.metrics).slice(0, 3).map(([key, value]) => 
        `<div class="metric">
            <span class="metric-value">${value}</span>
            <span class="metric-label">${key}</span>
        </div>`
    ).join('');
    
    const categoryBadge = project.category[0].toUpperCase();
    const categoryIcon = getCategoryIcon(project.category[0]);
    
    card.innerHTML = `
        <div class="project-header">
            <div class="project-category">
                <i class="${categoryIcon}"></i> ${categoryBadge}
            </div>
        </div>
        <h3>${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">${techBadges}</div>
        <div class="project-features">
            <h4><i class="fas fa-star"></i> Key Features:</h4>
            <ul>${featuresList}</ul>
        </div>
        <div class="project-metrics">${metricsHTML}</div>
        <div class="project-links">
            <a href="${project.github}" target="_blank" class="project-btn magnetic-btn">
                <i class="fab fa-github"></i> View Code
            </a>
            ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-btn magnetic-btn">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>` : ''}
        </div>
    `;
    
    return card;
}

function getCategoryIcon(category) {
    const icons = {
        'ai': 'fas fa-brain',
        'ml': 'fas fa-robot',
        'cv': 'fas fa-eye',
        'backend': 'fas fa-server',
        'database': 'fas fa-database',
        'fullstack': 'fas fa-layer-group',
        'algorithm': 'fas fa-code-branch'
    };
    return icons[category] || 'fas fa-folder';
}

// Contact form with animation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show toast notification
    showToast(`Thank you ${name}! Your message has been received. I'll get back to you soon!`);
    contactForm.reset();
});

// Toast notification function
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fas fa-check-circle" style="color: var(--success); margin-right: 10px;"></i>
        ${message}
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

// Scroll animations observer
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

document.querySelectorAll('.skill-card, .project-card, .stat-item, .feature-card').forEach(el => {
    observer.observe(el);
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    }
});

// ============================================
// SMOOTH SCROLL REVEAL
// ============================================

function initSmoothReveal() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    
    window.addEventListener('scroll', () => {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    });
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for frequent events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// EASTER EGG - Konami Code
// ============================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear';
    showToast('🎮 Konami Code Activated! You found the easter egg!');
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
}

// Add rainbow animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🚀 Welcome to Pranvkumar\'s Portfolio!', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%cBuilt with passion and creativity', 'font-size: 14px; color: #764ba2;');
console.log('%cInterested in the code? Check out: https://github.com/Pranvkumar', 'font-size: 12px; color: #a8b2d1;');
