// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animations
    document.querySelectorAll('section').forEach(section => {
        if (!section.classList.contains('hero')) {
            observer.observe(section);
        }
    });

    // Form group animations
    const formGroups = document.querySelectorAll('.form-group');
    const formObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                formObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    formGroups.forEach(group => {
        formObserver.observe(group);
    });

    // Map container animation
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        const mapObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    mapObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        mapObserver.observe(mapContainer);
    }
});