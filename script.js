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

// Enhanced Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Apply specific animation classes based on element type
            if (entry.target.classList.contains('trust-item')) {
                entry.target.classList.add('slideInLeft');
            } else if (entry.target.classList.contains('doctor-card')) {
                entry.target.classList.add('slideInRight');
            } else if (entry.target.classList.contains('service-card')) {
                entry.target.classList.add('fadeInUp');
            } else if (entry.target.classList.contains('health-tip-card')) {
                entry.target.classList.add('scaleIn');
            } else if (entry.target.classList.contains('contact-card')) {
                entry.target.classList.add('slideInLeft');
            } else if (entry.target.classList.contains('testimonial-card')) {
                entry.target.classList.add('slideInRight');
            } else {
                entry.target.classList.add('fadeInUp');
            }
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

// Observe cards for enhanced 3D animations
document.querySelectorAll('.cardLift, .service-card, .health-tip-card, .contact-card, .testimonial-card, .trust-item, .doctor-card').forEach(card => {
    card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    card.style.transform = 'translateZ(0)';
    card.style.perspective = '1000px';
    card.style.transformStyle = 'preserve-3d';
    observer.observe(card);
});

// Enhanced scroll-triggered animations with staggered effects
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -30px 0px'
});

// Observe grid items for staggered animations
document.querySelectorAll('.trust-grid > *, .doctors-grid > *, .services-grid > *, .health-tips-grid > *, .products-grid > *, .testimonials-grid > *').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    staggerObserver.observe(item);
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

// Welcome Splash Screen Management
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    
    // Check if splash screen has been shown before
    if (localStorage.getItem('splashScreenShown')) {
        // Hide splash screen immediately if already shown
        splashScreen.style.display = 'none';
        return;
    }
    
    // Set timeout for splash screen fade out
    setTimeout(() => {
        // Add hidden class to trigger fade out animation
        splashScreen.classList.add('hidden');
        
        // After animation completes, hide completely and mark as shown
        setTimeout(() => {
            splashScreen.style.display = 'none';
            localStorage.setItem('splashScreenShown', 'true');
        }, 1000);
    }, 3000); // 3 seconds
});
