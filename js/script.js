
//  theme toggle
const toggle = document.queryElementbyId("theme-toggle");
toggle.addEventListener("click", toggleTheme);

function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark");
}

//  math function
function random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}