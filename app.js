document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, {
      threshold: 0.5
  });

  document.querySelectorAll('.line').forEach(line => {
      observer.observe(line);
      line.style.transform = 'translateY(-100px)';
  });
});


document.querySelectorAll('.benefit-title').forEach(button => {
  button.addEventListener('click', function() {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
          content.style.display = "none";
      } else {
          content.style.display = "block";
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, {
      threshold: 0.5
  });

  document.querySelectorAll('.line').forEach(line => {
      observer.observe(line);
      line.style.transform = 'translateY(-100px)';
  });
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
