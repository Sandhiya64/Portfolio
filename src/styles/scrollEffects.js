export const scrollAnimations = () => {
  const elements = document.querySelectorAll('.fade-in-up');
  
  const checkVisibility = () => {
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        element.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();  // Check on page load too
};