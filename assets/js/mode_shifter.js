// functionality to shift mode from dark to light and vv
const toggler = document.getElementById("darkmode-toggle");
// const togglerlabel = document.getElementById("togglerlabel");
const root = document.querySelector(":root");   // preset quary
const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
var isdark = null;
const darkmode = {  // color scheme for darkmode
    '--color6': '#FFFFFF',
    '--color5': '#E5E7E9',
    '--color4': '#B3B6B7',
    '--color3': '#616161',
    '--color2': '#424242',
    '--color1': '#212121',
    '--red': '#EC7053',
};
const lightmode = { // color scheme for light mode
    '--color1': '#FFFFFF',
    '--color2': '#E5E7E9',
    '--color3': '#B3B6B7',
    '--color4': '#616161',
    '--color5': '#424242',
    '--color6': '#212121',
    '--red': '#E74C3C',
};

function check() {   // trigger when button is clicked
    if (toggler.checked) {    // for darkmode
        setVariables(darkmode);
        isdark = true;
        window.localStorage.setItem('isdark', true);

    } else {  // for lightmode
        setVariables(lightmode);
        isdark = false;
        window.localStorage.setItem('isdark', false);
    }
}

window.addEventListener("DOMContentLoaded", (event) => {    // load window
    var temp = window.localStorage.getItem('isdark');
    if (temp == null || temp == 'false') toggler.checked = false;
    else toggler.checked = true;
    check();
});
