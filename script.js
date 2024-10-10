document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".scroll-animation");

  const options = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollElements = document.querySelectorAll('.scroll-animation');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
  };

  const displayScrollElement = (element) => {
    element.classList.add('active');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
});

function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('open');
}

// Toggle the mobile menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Toggle the menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Hide the menu after clicking any link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});;


const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const matrixText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(0);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(15, 26, 51, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#e84a76'; // Letter color
    ctx.font = `${fontSize}px Source Code Pro`;

    for (let i = 0; i < drops.length; i++) {
      const text = matrixText[Math.floor(Math.random() * matrixText.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.length = Math.floor(canvas.width / fontSize);
  });
