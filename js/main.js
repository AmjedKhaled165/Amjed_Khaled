// Add this to your main.js file or in a script tag at the bottom of your HTML
document.addEventListener('DOMContentLoaded', function() {
    // Make header sticky on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('header nav .links a, .hero .btns .btn').forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply to links with hash
            if (this.getAttribute('href').startsWith('#')) {
                const targetId = this.getAttribute('href');
                
                // If it's just "#" (home), scroll to top
                if (targetId === "#") {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    return;
                }
                
                // For other sections
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    const offsetTop = targetSection.offsetTop - 80; // Account for header height
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const links = document.getElementById('links');
                    if (links.classList.contains('open')) {
                        links.classList.remove('open');
                    }
                }
            }
        });
    });

    // Preserve existing menu function
    window.Open_colose_Menu = function() {
        const links = document.getElementById('links');
        links.classList.toggle('open');
    }
});