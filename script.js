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
