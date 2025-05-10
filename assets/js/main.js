// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Animate menu items
    const links = navLinks.querySelectorAll('a');
    links.forEach((link, index) => {
        if (navLinks.classList.contains('active')) {
            link.style.animation = `slideIn 0.3s ease forwards ${index * 0.1}s`;
        } else {
            link.style.animation = '';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Add animation class to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
        
        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial check for elements in view
window.addEventListener('load', animateOnScroll);
// Check for elements in view on scroll
window.addEventListener('scroll', animateOnScroll);

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        if (isValid) {
            // Here you would typically send the form data to a server
            console.log('Form submitted:', new FormData(form));
            form.reset();
            alert('Thank you for your message! I will get back to you soon.');
        }
    });
});

// Add active class to current navigation item
const setActiveNavItem = () => {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (currentPath === itemPath || 
            (currentPath === '/' && itemPath === '/') ||
            (currentPath.includes(itemPath) && itemPath !== '/')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// Set active nav item on page load
window.addEventListener('load', setActiveNavItem);

// Scroll Progress Bar
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Loading Animation
const loading = document.createElement('div');
loading.className = 'loading';
loading.innerHTML = `
    <div class="spinner">
        <svg viewBox="0 0 50 50" class="spinner-svg">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
    </div>
`;
document.body.appendChild(loading);

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 500);
});

// Parallax Effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const cardX = (x - 0.5) * 20;
            const cardY = (y - 0.5) * 20;
            card.style.transform = `perspective(1000px) rotateY(${cardX}deg) rotateX(${-cardY}deg)`;
        }
    });
});

// Smooth Reveal Animation
const revealElements = document.querySelectorAll('.card, .hero h1, .hero p');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-fade-in');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check 