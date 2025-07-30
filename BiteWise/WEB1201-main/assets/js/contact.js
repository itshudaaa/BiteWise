// === FORM VALIDATION SCRIPT FOR CONTACT PAGE ===
document.addEventListener("DOMContentLoaded", () => {
  // === Get references to form and input fields ===
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const emailError = document.getElementById("emailError");

  // === Form submission event handler ===
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default for now

    // Clear previous error messages
    emailError.textContent = "";

    // First check required fields using HTML5
    if (!form.checkValidity()) {
      form.reportValidity(); // shows native HTML5 error popups
      return;
    }

    // Custom email format validation using regex
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = "Invalid email address";
      return;
    }

    // Custom message length validation
    const message = messageInput.value.trim();
    if (message.length < 10) {
      alert("Your message must be at least 10 characters.");
      return;
    }

    // Everything is valid: show success alert and redirect
    alert("Message sent successfully!");
    setTimeout(() => {
      window.location.href = "submit.html";
    }, 500);
  });

  // === HAMBURGER MENU TOGGLE ===
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
