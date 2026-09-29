// Mobile Navigation Menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("show");
}


// Dark / Light Mode
function toggleTheme() {
    document.body.classList.toggle("dark");

    const themeButton = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
}


// Close mobile menu after clicking a link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document.getElementById("navLinks").classList.remove("show");

    });

});


// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!email.includes("@")) {

        formMessage.textContent = "Please enter a valid email.";
        return;
    }

    formMessage.textContent = "Message sent successfully!";

    document.getElementById("contactForm").reset();

});


// Scroll Animation
function revealOnScroll() {

    const elements = document.querySelectorAll(".reveal");

    elements.forEach(function(element) {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();