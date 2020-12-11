const btn = document.querySelector('.hamburger')
const ul = document.querySelector('.navigation')

btn.addEventListener('click', ()=>{
  ul.classList.toggle('open')
})