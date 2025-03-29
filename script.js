// Burger Menu Toggle Function
function toggleMenu() {
    console.log("Burger menu clicked"); // Debugging line to check if the function is triggered

    const topnav = document.querySelector('.topnav');
    topnav.classList.toggle('responsive'); // Toggle the 'responsive' class on the whole .topnav
}

// Dynamic Active Link Assignment (Restoring the Active Link on Page Load)
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;  // Get the current page URL
    const links = document.querySelectorAll('.topnav a');  // Get all the nav links

    links.forEach(link => {
        // Check if the href matches the current page URL
        if (currentPage.includes(link.getAttribute('href'))) {
            link.classList.add('active');  // Add active class to the current page link
        } else {
            link.classList.remove('active');  // Remove active class from other links
        }
    });
});

// Nav bar scroll detection
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".topnav");
const burgerMenu = document.querySelector(".burger-menu");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    if (currentScrollY === 0) {
        // Fully show navbar when at the top
        navbar.style.transform = "translateY(0)";
    } else if (currentScrollY > lastScrollY) {
        // Hide navbar when scrolling down
        navbar.style.transform = "translateY(-100%)";
    } else {
        // Show navbar fully on desktop, partially on mobile
        navbar.style.transform = isMobile ? "translateY(-90px)" : "translateY(0)";
    }

    lastScrollY = currentScrollY;
});

// Ensure navbar is fully visible when the burger menu is clicked
burgerMenu.addEventListener("click", () => {
    navbar.style.transform = "translateY(0)";
});