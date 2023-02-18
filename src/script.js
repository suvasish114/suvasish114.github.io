let expand = document.getElementById("expand");
let expandbtn = document.getElementById("expandbtn");
navbar = document.getElementById("navbar");
function toggle() {
    if (window.screen.width <= 768 && !expand.classList.contains("collapsed")) {
        // navbar.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
        expandbtn.classList.remove("bi-list");
        expandbtn.classList.add("bi-x-lg");
    }
    else {
        navbar.style.boxShadow = "none";
        expandbtn.classList.add("bi-list");
        expandbtn.classList.remove("bi-x-lg");
    }
}