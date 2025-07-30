// === FORM VALIDATION SCRIPT FOR CONTACT PAGE ===
// This script now relies on HTML5 form validation only.
// If everything is okay, it shows a success message and redirects to submit.html.

document.addEventListener("DOMContentLoaded", () => {
  // === Get references to form and input fields ===
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // === Form submission event handler ===
  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      return;
    }

    // === Get trimmed message for extra length check ===
    const message = messageInput.value.trim();
    if (message.length < 10) {
      event.preventDefault();
      alert("Your message must be at least 10 characters.");
      return;
    }

    // === Redirect to success page ===
    event.preventDefault(); 
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
