// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle hash links on the current page
      if (href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href;
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const navHeight = document.querySelector('.main-nav').offsetHeight;
          const targetPosition = targetSection.offsetTop - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinksContainer.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking a nav link
    const navLinks = navLinksContainer.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinksContainer.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });
  }
  
  // Active nav link on scroll (only on homepage with sections)
  if (document.querySelector('#home')) {
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (linkHref === `#${sectionId}` || linkHref.endsWith(`#${sectionId}`)) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }
});