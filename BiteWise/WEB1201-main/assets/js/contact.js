// === FORM VALIDATION SCRIPT FOR CONTACT PAGE ===
// This script checks the form inputs before allowing submission.
// It ensures that the name, email, and message fields are properly filled.
// If everything is okay, it shows a success message and redirects to submit.html.

document.addEventListener("DOMContentLoaded", () => {
  // === Get references to form and input fields ===
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // === Create a <p> element to display feedback messages ===
  const feedback = document.createElement("p");
  form.appendChild(feedback); // Add feedback message below form

  // === Form submission event handler ===
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from submitting normally

    // === Get trimmed values from inputs ===
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // === Simple email validation pattern ===
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // === Validation checks ===
    if (name.length < 2) {
      feedback.textContent = "❌ Please enter your full name.";
      feedback.className = "error"; 
      return;
    }

    if (!email.match(emailPattern)) {
      feedback.textContent = "❌ Please enter a valid email address.";
      feedback.className = "error";
      return;
    }

    if (message.length < 10) {
      feedback.textContent = "❌ Your message must be at least 10 characters.";
      feedback.className = "error";
      return;
    }

    // === If all inputs are valid ===
    feedback.textContent = "✅ Message sent successfully!";
    feedback.className = "success";

    // === Clear form fields ===
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    // === Redirect to success page ===
    setTimeout(() => {
      window.location.href = "submit.html"; 
    }, 2000);
  });

  // === HAMBURGER MENU TOGGLE ===

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks"); 

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show"); 
  });
});
