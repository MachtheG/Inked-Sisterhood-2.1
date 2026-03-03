document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }
  
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    });
  });
});
