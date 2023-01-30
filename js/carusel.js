let slideIndex = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
let slideIndex5 = 1;
let slideIndex6 = 1;
let slideIndex7 = 1;
let slideIndex8 = 1;
let slideIndex9 = 1;
let slideIndex10 = 1;
let slideIndex11 = 1;

showSlides(slideIndex);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);
showSlides5(slideIndex5);
showSlides6(slideIndex6);
showSlides7(slideIndex7);
showSlides8(slideIndex8);
showSlides9(slideIndex9);
showSlides10(slideIndex10);
showSlides11(slideIndex11);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}
function plusSlides3(n) {
  showSlides3(slideIndex += n);
}
function plusSlides4(n) {
  showSlides4(slideIndex += n);
}
function plusSlides5(n) {
  showSlides5(slideIndex += n);
}
function plusSlides6(n) {
  showSlides6(slideIndex += n);
}
function plusSlides7(n) {
  showSlides7(slideIndex += n);
}
function plusSlides8(n) {
  showSlides8(slideIndex += n);
}
function plusSlides9(n) {
  showSlides9(slideIndex += n);
}
function plusSlides10(n) {
  showSlides10(slideIndex += n);
}
function plusSlides11(n) {
  showSlides11(slideIndex += n);
}







function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}
function currentSlide3(n) {
  showSlides3(slideIndex = n);
}
function currentSlide4(n) {
  showSlides4(slideIndex = n);
}
function currentSlide5(n) {
  showSlides5(slideIndex = n);
}
function currentSlide6(n) {
  showSlides6(slideIndex = n);
}
function currentSlide7(n) {
  showSlides7(slideIndex = n);
}
function currentSlide8(n) {
  showSlides8(slideIndex = n);
}
function currentSlide9(n) {
  showSlides9(slideIndex = n);
}
function currentSlide10(n) {
  showSlides10(slideIndex = n);
}
function currentSlide11(n) {
  showSlides11(slideIndex = n);
}







function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides4");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides5(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides5");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides6(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides6");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides7(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides7");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides8(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides8");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides9(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides9");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides10(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides10");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides11(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides11");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
