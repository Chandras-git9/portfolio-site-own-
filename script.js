// Smooth scroll to top when clicking "All rights reserved © ..."
document.querySelector('.footer-center p')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scale badges on hover
const badges = document.querySelectorAll('.badge-card');
badges.forEach(badge => {
  badge.addEventListener('mouseenter', () => {
    badge.style.transform = 'scale(1.05)';
    badge.style.transition = 'transform 0.3s ease';
  });
  badge.addEventListener('mouseleave', () => {
    badge.style.transform = 'scale(1)';
  });
});

// Add tooltips (title attributes) to social icons
document.querySelectorAll('.social-links a').forEach(link => {
  const icon = link.querySelector('i');
  if (icon && icon.className.includes('fa-')) {
    const rawName = icon.className.split('fa-')[1];
    const tooltip = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    link.title = tooltip;
  }
});

// Confirm before downloading resume
const resumeButton = document.querySelector('.resume-button');
resumeButton?.addEventListener('click', (e) => {
  const confirmed = confirm('📄 Do you want to download my resume?');
  if (!confirmed) e.preventDefault();
});

// Automatically add current year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ✏️ Typewriter effect with optional keyboard sound
const desc = document.querySelector('.portfolio-description');
const text = desc?.textContent.trim() || "";
desc.textContent = ""; // clear initial text

let index = 0;
const typingSpeed = 50; // adjust speed here (ms)

// Optional: preload a keyboard sound
const keySound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-typewriter-key-1123.mp3'); // replace with your own if needed

function typeWriter() {
  if (index < text.length) {
    desc.textContent += text.charAt(index);
    keySound.currentTime = 0;
    keySound.play().catch(() => {}); // prevent error if autoplay blocked
    index++;
    setTimeout(typeWriter, typingSpeed);
  }
}

// Start typing after page load
window.addEventListener('load', typeWriter);
