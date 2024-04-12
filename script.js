window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#222'; // Change background color on scroll
  } else {
    navbar.style.backgroundColor = '#333'; // Revert back to original color
  }
});
