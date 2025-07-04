
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav    = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // (valgfritt) Lukk menyen når du klikker én av lenkene
  document.querySelectorAll('.nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
});

