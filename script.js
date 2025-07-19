// Theme initialization and toggle functionality
(function() {
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    
    // Apply initial theme
    applyTheme(savedTheme);
    
    // Get theme toggle button - using class selector instead of id
    const themeToggle = document.querySelector(".theme-toggle");
    
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }
    
    function applyTheme(theme) {
        const html = document.documentElement;
        
        // Remove both classes first
        html.classList.remove("dark-mode", "light-mode");
        
        // Add the appropriate class
        if (theme === "dark") {
            html.classList.add("dark-mode");
        } else {
            html.classList.add("light-mode");
        }
        
        // Store the theme
        localStorage.setItem("theme", theme);
        
        // Update button icons
        updateButtonIcons(theme);
    }
    
    function toggleTheme() {
        const currentTheme = localStorage.getItem("theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        applyTheme(newTheme);
    }
    
    function updateButtonIcons(theme) {
        const moonIcon = document.querySelector(".theme-toggle .fa-moon");
        const sunIcon = document.querySelector(".theme-toggle .fa-sun");
        
        if (moonIcon && sunIcon) {
            if (theme === "dark") {
                moonIcon.style.opacity = "0";
                moonIcon.style.transform = "rotate(180deg)";
                sunIcon.style.opacity = "1";
                sunIcon.style.transform = "rotate(0deg)";
            } else {
                moonIcon.style.opacity = "1";
                moonIcon.style.transform = "rotate(0deg)";
                sunIcon.style.opacity = "0";
                sunIcon.style.transform = "rotate(180deg)";
            }
        }
    }
})();
// ------
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle menu
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});
