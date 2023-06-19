document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

document.getElementById("logo").onclick = function() {
    location.href = "#invi-nav-0"
};

function scrollValue() {
    var navbar = document.getElementById('navbar_top');
    var scroll = window.scrollY;

    console.log(scroll);

    if (scroll < 800) {
        navbar.classList.remove('nav-link-black');
        navbar.classList.remove('blackline')
    } else {
        navbar.classList.add('nav-link-black');
        navbar.classList.add('blackline')
    }
}

document.getElementById("btn-proyecto").onclick = function() {
    location.href = "proyecto.html";
};


document.getElementById("btn-apartamentos").onclick = function() {
    location.href = "apartamentos.html";
};



document.getElementById("btn-amenidades").onclick = function() {
    location.href = "amenidades.html";
};



window.addEventListener('scroll', scrollValue)

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
