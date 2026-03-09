// Smooth scrolling for navigation links
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

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Observe cards for lift animations
document.querySelectorAll('.cardLift').forEach(card => {
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});

// Observe service icons for floating animations
document.querySelectorAll('.floatingIcon').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
});

// Form submission handling
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।');
    this.reset();
});

// Map container animation on scroll
const mapContainer = document.querySelector('.map-container');
if (mapContainer) {
    mapContainer.style.transform = 'scale(0.95)';
    mapContainer.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
    
    const mapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mapContainer.style.transform = 'scale(1)';
            }
        });
    }, observerOptions);
    
    mapObserver.observe(mapContainer);
}

// Form group animation on scroll
const formGroups = document.querySelectorAll('.form-group');
const formObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

formGroups.forEach(group => {
    group.style.opacity = '0';
    group.style.transform = 'translateX(-20px)';
    group.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
    formObserver.observe(group);
});

// Floating action buttons smooth appearance
const floatingButtons = document.querySelector('.floating-buttons');
if (floatingButtons) {
    // Show buttons after page load
    setTimeout(() => {
        floatingButtons.style.opacity = '1';
        floatingButtons.style.transform = 'translateY(0)';
    }, 1000);
}

// Add smooth scroll to top functionality
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Show floating buttons
    if (floatingButtons) {
        floatingButtons.style.opacity = '0';
        floatingButtons.style.transform = 'translateY(20px)';
        floatingButtons.style.transition = 'all 0.5s ease';
    }
});
