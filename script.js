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