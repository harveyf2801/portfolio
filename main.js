// Menu open function
let menuopen = false;
const menu = document.querySelectorAll("nav,.hamburger,.menu-text");
function toggleMenu() {
    menu.forEach(element => {
        element.classList.toggle("open");
    });
    menuopen = !menuopen;
}

// Closing navigation if the window width is resized
window.addEventListener('resize', (event) => {
    if (window.innerWidth >= 1024 && menuopen) {
        toggleMenu();
    }
});





/* - SCROLL FUNCTIONS - */
window.onscroll = function() {
    const currentScroll = window.pageYOffset;
    topTopScroll(currentScroll);
    navShow(currentScroll);
};


// Showing navigation if the window is scrolled up
let lastScroll = 0;
const navbar = document.querySelector(".nav-bar");

function navShow(currentScroll) {
    if (!menuopen) {
        if (currentScroll <= 0) {
            navbar.classList.remove("scroll-up");
        }
        if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
            navbar.classList.remove("scroll-up");
            navbar.classList.add("scroll-down");
        }
        if (currentScroll < lastScroll && navbar.classList.contains("scroll-down")) {
            navbar.classList.remove("scroll-down");
            navbar.classList.add("scroll-up");
        }
    }
    lastScroll = currentScroll;
}

// Show the 'go to top' button when the windows scrolled down 20px from the top
toTopBtn = document.getElementById("to-top");
function topTopScroll(currentScroll) {
    if (currentScroll > 20 || currentScroll > 20) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

// Scroll to the top of the document when the to-top button is pressed
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}















const section = document.querySelectorAll('.fadingsection');

const observer = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    }
}, { threshold: 1.0, rootMargin: '20%' })

section.forEach(el => observer.observe(el));