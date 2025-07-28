document.addEventListener("DOMContentLoaded", () => {
  // Typewriter effect
  const words = ["angry", "sad", "happy", "stressed", "bored"];
  let i = 0;
  let j = 0;
  let isDeleting = false;
  const speed = 100;
  const delay = 1500;
  const textSpan = document.getElementById("typed-text");

  function type() {
    const word = words[i];
    if (isDeleting) {
      textSpan.textContent = word.substring(0, j--);
    } else {
      textSpan.textContent = word.substring(0, j++);
    }

    if (!isDeleting && j === word.length + 1) {
      isDeleting = true;
      setTimeout(type, delay);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? 60 : speed);
    }
  }

  type();

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});