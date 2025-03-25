// Burger Menu Toggle Function
function toggleMenu() {
    const centeredNav = document.querySelector('.topnav-centered');
    const rightNav = document.querySelector('.topnav-right');
    const leftNav = document.querySelector('.topnav-left');

    // Toggle visibility of all sections (left, center, and right) when burger menu is clicked
    centeredNav.classList.toggle('responsive');
    rightNav.classList.toggle('responsive');
    leftNav.classList.toggle('responsive');
}

// Dynamic Active Link Assignment
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
