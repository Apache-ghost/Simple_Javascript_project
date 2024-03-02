// script.js

// Get all the section elements
const sections = document.querySelectorAll('section');

// Function to handle navigation highlighting
function handleNavigationHighlight(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Remove active class from all sections
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Add active class to the target section
    targetSection.classList.add('active');
}

// Add click event listeners to navigation links
const navigationLinks = document.querySelectorAll('nav a');
navigationLinks.forEach((link) => {
    link.addEventListener('click', handleNavigationHighlight);
});