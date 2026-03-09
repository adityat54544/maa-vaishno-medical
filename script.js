// Mobile Detection System
(function() {
    const body = document.body;
    const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        body.classList.add('mobile-device');
    }
})();

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

// Enhanced Intersection Observer for scroll animations with mobile optimization
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

// Observe cards for enhanced 3D animations with GPU acceleration
document.querySelectorAll('.cardLift, .service-card, .health-tip-card, .contact-card, .testimonial-card, .trust-item, .doctor-card').forEach(card => {
    card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    card.style.transform = 'translateZ(0)';
    card.style.perspective = '1000px';
    card.style.transformStyle = 'preserve-3d';
    card.style.willChange = 'transform, opacity';
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
    item.style.willChange = 'transform, opacity';
    staggerObserver.observe(item);
});

// Observe service icons for floating animations
document.querySelectorAll('.floatingIcon').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
    icon.style.willChange = 'transform';
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
    mapContainer.style.transition = 'transform 0.6s cubic-bezier(0.25, 0, 0.25, 1)';
    mapContainer.style.willChange = 'transform';
    
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
    group.style.transition = 'all 0.4s cubic-bezier(0.25, 0, 0.25, 1)';
    group.style.willChange = 'transform, opacity';
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

// Parallax Depth System
(function() {
    const parallaxElements = document.querySelectorAll('[data-speed]');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
                const yPos = -(scrollPosition * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });
    }
})();

// Magnetic CTA Button Interactions
(function() {
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .floating-btn');
    
    magneticButtons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const maxDistance = Math.max(rect.width, rect.height) / 2;
        const maxMovement = 10; // Maximum movement in pixels
        
        button.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const distanceX = mouseX - centerX;
            const distanceY = mouseY - centerY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            
            if (distance < maxDistance) {
                const movementX = (distanceX / maxDistance) * maxMovement;
                const movementY = (distanceY / maxDistance) * maxMovement;
                
                button.style.transform = `translate3d(${movementX}px, ${movementY}px, 0) scale(1.02)`;
            }
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate3d(0, 0, 0) scale(1)';
        });
    });
})();

// Health Tips Carousel Implementation
(function() {
    const healthTipsGrid = document.querySelector('.health-tips-grid');
    const healthTipsCards = document.querySelectorAll('.health-tip-card');
    
    if (healthTipsGrid && healthTipsCards.length > 0) {
        // Convert to horizontal scroll-snap layout for mobile
        if (document.body.classList.contains('mobile-device')) {
            healthTipsGrid.style.display = 'flex';
            healthTipsGrid.style.overflow = 'auto';
            healthTipsGrid.style.scrollSnapType = 'x mandatory';
            healthTipsGrid.style.padding = '1rem 0';
            healthTipsGrid.style.gap = '1rem';
            healthTipsGrid.style.scrollBehavior = 'smooth';
            
            healthTipsCards.forEach(card => {
                card.style.flex = '0 0 auto';
                card.style.width = '80vw';
                card.style.scrollSnapAlign = 'start';
                card.style.transform = 'translateZ(0)';
                card.style.willChange = 'transform, opacity';
            });
        }
    }
})();

// Floating Icon Animation System
(function() {
    const floatingIcons = document.querySelectorAll('.floatingIcon, .tip-icon, .service-icon');
    
    floatingIcons.forEach((icon, index) => {
        icon.style.animation = `floatingMotion 4s ease-in-out infinite ${index * 0.5}s`;
        icon.style.willChange = 'transform';
    });
})();
