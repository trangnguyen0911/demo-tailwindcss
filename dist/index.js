/** 
 * Slide Bar Handler
 * 
 * Version: 1.0
 * Date: 12-03-2025
 * 
 * Copyright © 2025
 * 
 * Modification Logs: 
 * DATE        AUTHOR      DESCRIPTION
 * ----------------------------------- 
 * 12-03-2025  TrangNTT    Created
 */
let slideIndex = 0;
showSlides();

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  let dotActiveIndex = (slides.length + 1) * (slideIndex - 1)
  dots[dotActiveIndex].className += " active";
  setTimeout(showSlides, 6000)
}