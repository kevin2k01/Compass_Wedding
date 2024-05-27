window.addEventListener('scroll', function() {
  let scroll = window.scrollY;
  document.querySelector('.parallax-section .parallax-inner').style.transform = `translateY(-${scroll}px)`;
});
