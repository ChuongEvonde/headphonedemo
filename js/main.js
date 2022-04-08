let search = document.querySelector('.navbar_search');
document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}
let cart = document.querySelector('.navbar_cart');
document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
}
let user = document.querySelector('.navbar_user');
document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
    // menu.classList.remove('active');
}
// let menu = document.querySelector('.menu-links');
// document.querySelector('#menu-icon').onclick = () =>{
//     menu.classList.toggle('active');
//     search.classList.remove('active');
//     cart.classList.remove('active');
// }
window.onscroll = () =>{
    search.classList.remove('active');
    cart.classList.remove('active');
}

// ------------siledr----------
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" show", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " show";
  setTimeout(showSlides, 3500);
}
// ----------------zoom img-------------
