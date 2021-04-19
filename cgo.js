
let bar_icon = document.querySelector('.bar-icon');
let nav = document.querySelector('.menu');
let enlaces = document.querySelector('.list-container');
let contador = true;

bar_icon.addEventListener('click',function(){
  this.classList.toggle('active');

if(contador == true){
  enlaces.style.width = '100%';
  enlaces.style.overflow ='hidden';
  enlaces.style.transition='0.5s';

  nav.style.background ='redlight';
  nav.style.transition = '0.5s';

  contador= false;
}
else{
  contador=true;
  enlaces.style.width ='0%';
  enlaces.style.overflow ='hidden';
  enlaces.style.transition='0.5s';

  nav.style.background='redlight';
  nav.style.transition='0.5s';
}
});

// funcion ir arriba

$(document).ready(function(){
  $('.go-top').on('click',function(){
  $('body, html').animate({
    scrollTop:'0'
  },500);
  });

// funcion ver abajo

$('#abajo').on('click',function(){
  $('body, html').animate({
    scrollTop:'600px'
  }, 500);
});




});
