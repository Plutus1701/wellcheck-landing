// WellCheck - Shared Navigation Component
// This script automatically adds the navigation bar to all pages

document.addEventListener('DOMContentLoaded', function() {
    // Create navigation HTML
    const navHTML = `
        <nav class="nav">
            <div class="nav-container">
                <a href="/" class="nav-logo">WellCheck</a>
                <button class="nav-toggle" aria-label="Toggle menu">
                    ☰
                </button>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/privacy">Privacy</a></li>
                    <li><a href="/terms">Terms</a></li>
                    <li><a href="/consent">SMS Consent</a></li>
                    <li><a href="mailto:support@wellcheck.app">Support</a></li>
                </ul>
            </div>
        </nav>
    `;
    
    // Insert navigation at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
        }
    });
    
    // Highlight current page
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath === href || (currentPath === '/' && href === '/')) {
            link.style.color = 'var(--accent-green)';
        }
    });
});
