document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing-text");
    if (!typingElement) return;
  
    const text = "Master Business Computing | Développement, IA, IoT & Recherche";
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 60);
      }
    }
  
    typeWriter();
    AOS.init({ duration: 1000, once: true });
  });
  window.addEventListener('load', () => {
    const img = document.getElementById('profile-img');
    img.style.opacity = '1';
    img.style.transform = 'translateY(0) ';
  });
  window.addEventListener('load', () => {
    const img = document.querySelector('.about-image img');
    img.style.opacity = '1';
    img.style.transform = 'translateY(0)';
  });
  
    