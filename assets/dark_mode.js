// if (localStorage.getItem("theme") === "dark") {document.body.classList.add("dark-mode");}
//     const toggleBtn = document.getElementById("darkModeToggle");
//     toggleBtn.addEventListener("click", function () {
//         document.body.classList.toggle("dark-mode");
//         if (document.body.classList.contains("dark-mode")) {localStorage.setItem("theme", "dark");} 
//         else {localStorage.setItem("theme", "light");}
//     });

const themeBtn = document.getElementById("themeBtn");
const toggleIcon = document.getElementById("darkModeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleIcon.classList.replace("bi-moon", "bi-brightness-high");
}

// Toggle theme on button click
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleIcon.classList.replace("bi-moon", "bi-brightness-high");
    } else {
        localStorage.setItem("theme", "light");
        toggleIcon.classList.replace("bi-brightness-high", "bi-moon");
    }
});