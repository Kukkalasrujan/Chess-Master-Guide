// Smooth scroll function
function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scroll for navigation links
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

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply initial styles and observe sections
document.querySelectorAll('.section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Interactive piece movement visualizer
function initializeChessBoard() {
    console.log('Chess guide loaded successfully!');
}

// Call initialization when page loads
window.addEventListener('load', initializeChessBoard);

// Highlight code on load
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for better interactivity
    const pieceCards = document.querySelectorAll('.piece-card');
    pieceCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#fff5e6';
        });
        card.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
});