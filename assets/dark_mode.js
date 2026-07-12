// if (localStorage.getItem("theme") === "dark") {document.body.classList.add("dark-mode");}
//     const toggleBtn = document.getElementById("darkModeToggle");
//     toggleBtn.addEventListener("click", function () {
//         document.body.classList.toggle("dark-mode");
//         if (document.body.classList.contains("dark-mode")) {localStorage.setItem("theme", "dark");} 
//         else {localStorage.setItem("theme", "light");}
//     });

document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const themeBtn = document.getElementById("themeBtn");
    const toggleIcon = document.getElementById("darkModeToggle");

    if (!themeBtn || !toggleIcon) {
        console.error("Theme button or icon not found.");
        return;
    }

    // Apply theme
    function setTheme(isDark) {
        if (isDark) {
            root.classList.add("dark-mode");
            toggleIcon.classList.remove("bi-moon");
            toggleIcon.classList.add("bi-brightness-high");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark-mode");
            toggleIcon.classList.remove("bi-brightness-high");
            toggleIcon.classList.add("bi-moon");
            localStorage.setItem("theme", "light");
        }
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme === "dark");

    // Toggle theme
    themeBtn.addEventListener("click", () => {
        const isDark = !root.classList.contains("dark-mode");
        setTheme(isDark);
    });
});