$(document).ready(function () {
     $('.services:odd .number').css('right', '-20px');
     $('.services:even .number').css('left', '-20px');

     var year = new Date().getFullYear();
     $('.year').html(`${year}`);

    
     var interval = window.setInterval(rotateSlides, 3000)

               function rotateSlides() {
                    var $firstSlide = $('#carousel').find('div:first');
                    var width = $firstSlide.width();

                    $firstSlide.animate({ marginLeft: -width }, 1000, function () {
                         var $lastSlide = $('#carousel').find('div:last')
                         $lastSlide.after($firstSlide);
                         $firstSlide.css({ marginLeft: 0 })
                    })
               }

})

window.addEventListener("load",function(){
     this.document.getElementById('preloader').style.display = "none";
})

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.side_menu');
const navLinks = document.querySelectorAll('.side_menu .nav_link');

hamburger.addEventListener("click",function(){
     const bodyOverlay = document.createElement("div");
     bodyOverlay.className = 'overlay';
     menu.classList.add('show');
     setTimeout(function(){
          document.querySelector('body').appendChild(bodyOverlay);
     },300);

})
document.querySelector('.close').addEventListener("click",function(){
     const bodyOverlay = document.querySelector('.overlay');
     document.querySelector('body').removeChild(bodyOverlay);
     menu.classList.remove('show');
})

navLinks.forEach((link)=>{
     link.addEventListener("click",function(){
          const bodyOverlay = document.querySelector('.overlay');
          document.querySelector('body').removeChild(bodyOverlay);
          menu.classList.remove('show');
     })
})

