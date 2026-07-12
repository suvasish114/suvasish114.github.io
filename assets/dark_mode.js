// if (localStorage.getItem("theme") === "dark") {document.body.classList.add("dark-mode");}
//     const toggleBtn = document.getElementById("darkModeToggle");
//     toggleBtn.addEventListener("click", function () {
//         document.body.classList.toggle("dark-mode");
//         if (document.body.classList.contains("dark-mode")) {localStorage.setItem("theme", "dark");} 
//         else {localStorage.setItem("theme", "light");}
//     });

const toggleBtn = document.getElementById("darkModeToggle");
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.classList.replace("bi-moon", "bi-brightness-high");
}

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.classList.replace("bi-moon", "bi-brightness-high");
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.classList.replace("bi-brightness-high", "bi-moon");
    }
});