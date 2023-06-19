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


function scrollValue() {
    var navbar = document.getElementById('navbar_top');
    var scroll = window.scrollY;

    console.log(scroll);

    if (scroll < 0) {
        navbar.classList.add('nav-link-black');
        navbar.classList.add('blackline')
    }
}


window.addEventListener('scroll', scrollValue)