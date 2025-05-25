// Background images for subtle parallax effect
const backgroundImages = [
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
];

// Create background elements
function createBackgroundElements() {
    const container = document.createElement('div');
    container.className = 'dynamic-backgrounds';
    
    // Create a div for each background image
    backgroundImages.forEach((image, index) => {
        const bg = document.createElement('div');
        bg.className = 'dynamic-background';
        bg.style.backgroundImage = `url('${image}')`;
        bg.style.opacity = index === 0 ? 0.7 : 0;
        bg.style.zIndex = -10 - index;
        container.appendChild(bg);
    });
    
    // Insert at the beginning of body
    document.body.insertBefore(container, document.body.firstChild);
    
    // Add subtle animation to cards
    setTimeout(addCardAnimations, 1000);
}

// Update backgrounds based on scroll position - more subtle effect
function updateBackgrounds() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight,
        document.body.offsetHeight, 
        document.documentElement.offsetHeight
    ) - windowHeight;
    
    // Avoid division by zero
    if (documentHeight <= 0) return;
    
    const scrollPercentage = Math.min(scrollPosition / documentHeight, 1);
    const backgrounds = document.querySelectorAll('.dynamic-background');
    
    // Use fewer transitions for less distraction
    const activeIndex = Math.min(
        Math.floor(scrollPercentage * backgroundImages.length),
        backgroundImages.length - 1
    );
    
    backgrounds.forEach((bg, index) => {
        // Make transitions very subtle
        bg.style.opacity = index === activeIndex ? 0.7 : 0;
    });
}

// Add subtle animations to cards for better focus
function addCardAnimations() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // Add subtle entrance animation with delay based on position
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize background effect
document.addEventListener('DOMContentLoaded', () => {
    createBackgroundElements();
    
    // Initial update
    updateBackgrounds();
    
    // Update on scroll - throttled for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateBackgrounds();
                ticking = false;
            });
            ticking = true;
        }
    });
});