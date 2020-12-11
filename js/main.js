window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


var search = document.querySelector('#header-search');
var searchform = document.querySelector('.search')

search.addEventListener('click', function() {
    searchform.classList.toggle('non-active');
});



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  });