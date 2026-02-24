// ============================================
// PORTFOLIO - Enhanced Interactive JavaScript
// 3D Effects, Animations & Interactions
// ============================================

// Portfolio projects data
const projects = [
    // === AI/ML Projects ===
    {
        id: 1,
        title: "Face Mask Detection System",
        category: ["ai", "cv"],
        description: "Real-time face mask detection using MobileNetV2 transfer learning and OpenCV. Trained on 7,553 images with high accuracy binary classification.",
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "MobileNetV2"],
        features: [
            "Real-time webcam detection with DNN face detector",
            "MobileNetV2 transfer learning (224×224 RGB)",
            "7,553-image Kaggle dataset (balanced classes)",
            "Pre-trained .h5 model ready for deployment"
        ],
        github: "https://github.com/Pranvkumar/coding/tree/main/Projects/Face_Mask_Detection",
        metrics: {
            accuracy: "High accuracy",
            dataset: "7,553 images",
            model: "MobileNetV2"
        },
        image: "assets/images/face-mask.jpg"
    },
    {
        id: 2,
        title: "MNIST Neural Network from Scratch",
        category: ["ai", "ml"],
        description: "Deep neural network built entirely from scratch using only NumPy — no TensorFlow or Keras. Achieves 98.52% accuracy on MNIST handwritten digit classification.",
        technologies: ["Python", "NumPy", "Mathematics", "Neural Networks"],
        features: [
            "784 → 512 → 512 → 10 architecture (670K params)",
            "98.52% test accuracy after 30 epochs",
            "ReLU, Softmax, Cross-Entropy from scratch",
            "Mini-batch gradient descent with LR decay"
        ],
        github: "https://github.com/Pranvkumar/coding/tree/main/Neural%20Network",
        metrics: {
            accuracy: "98.52%",
            params: "670,218",
            framework: "Pure NumPy"
        },
        image: "assets/images/neural-network.jpg"
    },
    {
        id: 3,
        title: "Smart Financial Advisor",
        category: ["fullstack", "ai", "backend"],
        description: "AI-powered financial advisor with real-time stock tracking, portfolio analysis, and personalized recommendations using Finnhub API.",
        technologies: ["Python", "FastAPI", "JavaScript", "Finnhub API", "Chart.js", "CSS3"],
        features: [
            "Real-time stock price tracking",
            "AI-powered investment recommendations",
            "Portfolio performance analytics",
            "Session-based authentication",
            "Search history tracking",
            "Glassmorphism animated UI"
        ],
        github: "https://github.com/Pranvkumar/Smart_Financial_Advisor",
        metrics: {
            api: "Finnhub Real-time",
            auth: "Session-based",
            ui: "Glassmorphism"
        },
        image: "assets/images/smart-financial.jpg"
    },
    {
        id: 4,
        title: "Flight Price Prediction Engine",
        category: ["fullstack", "ai", "backend"],
        description: "Multi-modal travel booking system with real-time price predictions, interactive analytics dashboard, and AI-powered demand forecasting.",
        technologies: ["Python", "FastAPI", "React", "TypeScript", "Redux Toolkit", "MUI", "SQLAlchemy"],
        features: [
            "Dynamic flight search with autocomplete",
            "Real-time price trend indicators",
            "6-month demand forecasting",
            "Competitor pricing analysis",
            "Route performance metrics",
            "Material-UI glassmorphism design"
        ],
        github: "https://github.com/Pranvkumar/skyprice-flight-engine",
        metrics: {
            modes: "5 travel types",
            routes: "60+ API endpoints",
            frontend: "React + TypeScript"
        },
        image: "assets/images/flight-price.jpg"
    },
    {
        id: 5,
        title: "Student Management System v4.0",
        category: ["backend", "fullstack", "database"],
        description: "Enterprise-grade student management system with advanced security features, role-based access, and comprehensive reporting.",
        technologies: ["Python", "Flask", "MySQL", "JWT", "REST API", "JavaScript"],
        features: [
            "Password hashing (PBKDF2-SHA256)",
            "Role-based auth (Admin/Student/Faculty)",
            "CSV export & email notifications",
            "40+ database indexes for performance",
            "Attendance & course management",
            "80+ REST API endpoints"
        ],
        github: "https://github.com/Pranvkumar/Student-Management-System",
        metrics: {
            routes: "80+ endpoints",
            tables: "10 normalized",
            lines: "1,200+ lines"
        },
        image: "assets/images/student-system.jpg"
    },

    // === DevOps / Cloud Projects ===
    {
        id: 6,
        title: "ASH-Fabric: Self-Healing Cloud Infrastructure",
        category: ["devops", "fullstack", "backend", "ai"],
        description: "Autonomous Self-Healing Cloud Fabric — an agentic system that monitors, triages, and remediates cloud infrastructure issues using LLM-driven agents, event-driven architecture, and deterministic automation.",
        technologies: ["Python", "FastAPI", "Go", "NATS", "Docker", "VictoriaMetrics", "Terraform", "Next.js", "Tailwind CSS"],
        features: [
            "3 AI agents: Triage, Execution, Audit",
            "NATS JetStream event bus architecture",
            "5 deterministic remediation scripts",
            "VictoriaMetrics real-time metrics pipeline",
            "Live dashboard with Next.js 14",
            "Terraform + Ansible IaC integration",
            "Alertmanager webhook-driven alerts",
            "Human-in-the-loop approval gates"
        ],
        github: "https://github.com/Pranvkumar/Ash-Fabric",
        metrics: {
            agents: "3 AI agents",
            services: "8 microservices",
            stack: "Go + Python + Next.js"
        },
        image: "assets/images/ash-fabric.jpg"
    },

    // === Database Projects ===
    {
        id: 7,
        title: "MySQL & MongoDB Database Labs",
        category: ["database"],
        description: "Comprehensive collection of 17+ database experiments covering SQL joins, PL/SQL programming, triggers, cursors, stored procedures, indexing optimization, and MongoDB.",
        technologies: ["MySQL", "Oracle PL/SQL", "MongoDB", "Database Design", "Query Optimization"],
        features: [
            "17+ lab experiments (SQL + PL/SQL + NoSQL)",
            "Complex joins, subqueries, views",
            "Stored procedures, functions, cursors",
            "Triggers & salary audit automation",
            "40+ strategic indexes (50-80% speedup)",
            "MongoDB document operations"
        ],
        github: "https://github.com/Pranvkumar/coding/tree/main/Database",
        metrics: {
            experiments: "17+ labs",
            speedup: "50-80%",
            databases: "MySQL + MongoDB"
        },
        image: "assets/images/database.jpg"
    },

    // === FinMind ===
    {
        id: 8,
        title: "FinMind: AI-Powered Finance Manager",
        category: ["ai", "fullstack", "backend"],
        description: "AI-powered personal finance manager with receipt scanning, smart categorization, and financial coaching via LLM. Features Groq Llama 3.3 70B for text and Llama 4 Scout for vision.",
        technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "MongoDB", "Groq API", "JWT"],
        features: [
            "AI auto-categorization of transactions using Groq Llama",
            "Receipt/screenshot scanning with vision AI",
            "AI financial coach chatbot with spending insights",
            "Interactive dashboard with charts & analytics",
            "JWT double-token auth with auto-refresh"
        ],
        github: "https://github.com/Pranvkumar/FinMInd",
        demo: "https://finmind-client.onrender.com",
        metrics: {
            ai: "Llama 3.3 + 4 Scout",
            stack: "React + Express + MongoDB",
            auth: "JWT Double-Token"
        },
        image: "assets/images/finmind.jpg"
    },

    // === SyncWave ===
    {
        id: 9,
        title: "SyncWave: Real-Time Collaborative Editor",
        category: ["fullstack", "backend", "frontend"],
        description: "Production-ready real-time collaborative editor built with CRDTs (Conflict-free Replicated Data Types) — an open-source, local-first Google Docs alternative.",
        technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "Yjs", "Tiptap", "WebSocket", "SQLite", "Docker"],
        features: [
            "Real-time collaboration with live cursors",
            "Offline-first architecture — works without internet",
            "Rich text editing (bold, italic, headings, code blocks)",
            "CRDT-guaranteed eventual consistency",
            "Docker + Render deployment ready"
        ],
        github: "https://github.com/Pranvkumar/SyncWave",
        metrics: {
            sync: "CRDT-based (Yjs)",
            architecture: "Offline-first",
            protocol: "Binary WebSocket"
        },
        image: "assets/images/syncwave.jpg"
    },

    // === CORSAIR (SIH) ===
    {
        id: 10,
        title: "CORSAIR: Ocean Hazard Detection System",
        category: ["ai", "fullstack", "backend"],
        description: "Intelligent ocean hazard detection platform integrating real-time data analysis, social media NLP monitoring, and AI-powered risk assessment for coastal safety. Built for Smart India Hackathon 2024.",
        technologies: ["Next.js", "TypeScript", "Firebase", "Python", "Google Cloud AI", "NLP", "Tailwind CSS", "Docker"],
        features: [
            "Real-time multi-hazard monitoring (tsunamis, storms, oil spills)",
            "Social media NLP intelligence for hazard detection",
            "AI-powered citizen reporting chatbot",
            "Interactive maps with live ocean conditions",
            "Emergency alerting system with automated notifications"
        ],
        github: "https://github.com/Pranvkumar/SIH-PROJECT",
        metrics: {
            event: "Smart India Hackathon 2024",
            ai: "NLP + Cloud AI",
            stack: "Next.js + Firebase + Python"
        },
        image: "assets/images/corsair.jpg"
    },

    // === Global Game Jam ===
    {
        id: 11,
        title: "Global Game Jam 2025",
        category: ["game"],
        description: "Unity game developed during Global Game Jam 2025 — a 48-hour game development challenge featuring custom shaders and C# scripting.",
        technologies: ["Unity", "C#", "ShaderLab", "HLSL"],
        features: [
            "48-hour game jam development",
            "Custom shader work (ShaderLab + HLSL)",
            "Complete Unity asset pipeline",
            "Game design & rapid prototyping"
        ],
        github: "https://github.com/Pranvkumar/GLOBAL-GAME-JAM-2025",
        metrics: {
            engine: "Unity",
            timeframe: "48 hours",
            shaders: "Custom HLSL"
        },
        image: "assets/images/gamejam.jpg"
    },

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

const textArray = ["Full Stack Developer", "AI/ML Engineer", "DevOps & Cloud Architect", "Database Engineer", "Problem Solver"];
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
        'algorithm': 'fas fa-code-branch',
        'devops': 'fas fa-cloud'
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
