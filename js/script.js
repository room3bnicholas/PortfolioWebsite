// Burger Menu Toggle Function
function toggleMenu() {
    const topnav = document.querySelector('.topnav');
    const burgerMenu = document.querySelector(".burger-menu");

    topnav.classList.toggle('responsive');

    if (topnav.classList.contains('responsive')) {
        burgerMenu.innerHTML = "✖"; // Close icon
    } else {
        burgerMenu.innerHTML = "&#9776;"; // Hamburger icon
    }
}

// Active link assignment
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;
    const links = document.querySelectorAll('.topnav a');

    links.forEach(link => {
        if (currentPage.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Scroll detection
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".topnav");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    if (currentScrollY === 0) {
        navbar.style.transform = "translateY(0)";
    } else if (currentScrollY > lastScrollY) {
        navbar.style.transform = "translateY(-100%)";
    } else {
        // Show navbar with burger + active link on scroll up
        navbar.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
});

// Force navbar visible when burger is clicked
document.querySelector(".burger-menu").addEventListener("click", () => {
    navbar.style.transform = "translateY(0)";
});