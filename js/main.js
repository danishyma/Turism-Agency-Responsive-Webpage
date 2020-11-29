'use strict';

// ***** VIDEO BUTTON *****

document.getElementById("my_btn").addEventListener('click', function() {
    var video = document.getElementById("bg-video");
    var btn = document.getElementById("pause");
      if (video.paused) {
        video.play();
          if (btn.classList.contains('fa-play-circle')){
            btn.classList.remove('fa-play-circle');
            btn.classList.add('fa-pause-circle');
          } else {
            btn.classList.add('fa-play-circle');
          }
      } else {
        video.pause();
          if (btn.classList.contains('fa-pause-circle')){
            btn.classList.remove('fa-pause-circle');
            btn.classList.add('fa-play-circle');
          } else {
            btn.classList.add('fa-pause-circle');
          }
      }
})


// ***** FLIP CARD FROM MENU *****
var timeout;

document.querySelectorAll('.menu a').forEach(item => {
    // var timeout;
    clearTimeout(timeout);
    item.addEventListener('click', e => {
      var card = document.getElementById(item.className);
      card.style.transform = "rotateY(180deg)";
      document.getElementsByClassName("nav")[0].classList.toggle("responsive");
      document.getElementById("menu-toggle").classList.toggle("change");
      timeout = setTimeout(function() { 
        card.style.transform = "rotateY(0deg)"; 
      }, 20000);
    })
  })

// ***** CARD FLIP*****

document.querySelectorAll('.card__content').forEach(item => {
    // var timeout;
    clearTimeout(timeout);
    item.addEventListener('click', el => {
      if(item.style.transform == "rotateY(180deg)") {
        item.style.transform = "rotateY(0deg)";
      }
      else {
        item.style.transform = "rotateY(180deg)";
      }
      timeout = setTimeout(function() { 
        item.style.transform = "rotateY(0deg)"; 
      }, 20000);
    })
  })
  