// Typing animation dans le header
const text = "Master Business Computing | Développement, IA, IoT & Recherche";
const typingElement = document.getElementById("typing-text");
let index = 0;
const speed = 80;

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  AOS.init({ duration: 1000, once: true });
});
