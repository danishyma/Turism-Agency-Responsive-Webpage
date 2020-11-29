'use strict';

// ***** NAVIGATION BAR CHANGE ON SCROLL *****

const header = document.querySelector("nav");
const sectionOne = document.querySelector("header");
// var marginString = IntersectionObserver.rootMargin;
const sectionOneOptions = {
  rootMargin: "-150px 0px 0px 0px", //establish the position where the navbar will change
  threshold: 0.5
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  // sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);


// ***** MENU TOGGLE - HAMBUGER VS X *****

document.getElementById("menu-toggle").addEventListener('click', function() {
  document.getElementsByClassName("nav")[0].classList.toggle("responsive");
  document.getElementById("menu-toggle").classList.toggle("change");
});


// ***** TESTEMONIALS SLIDESHOW *****

// var slideIndex = 0;
// slide_show();

const slides = document.querySelectorAll(".testimonials");
const dot = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

var index = 0;

dot.forEach(item => {
  item.addEventListener('click', el => {
    for (let i = 0; i < dot.length; i++) {
      dot[i].classList.remove("active");
    }
    item.classList.add('active');
    index = item.id;
    changeSlide();
  })
});

prev.addEventListener("click", function(){
  if(index == 0){
    index = slides.length -1;
  } else {
    index--;
  }
  changeSlide();
});

next.addEventListener("click", function(){
  if(index == slides.length -1){
    index = 0;
  } else {
    index++;
  }
  changeSlide();
});

function changeSlide(){
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dot[i].classList.remove("active");
  }
  slides[index].classList.add("active");
  dot[index].classList.add("active");
  
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active')){
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }
}

slide_show();

function slide_show() {
  var i;
  for (i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active')){
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }
  if(index == slides.length -1){
    index = 0;
  } else {
    index++;
  }
  setTimeout(slide_show, 10000);
  changeSlide();
}


// ***** Scroll to Top *****
var myButton = document.getElementById("scroll_top");
window.onscroll = function() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}