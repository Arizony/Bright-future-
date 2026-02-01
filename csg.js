// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Simple CTA alert
function showAlert() {
    alert("Thank you for your interest! Our admissions team will contact you soon.");
}