function randfunc(min ,max){//Fonction qui génère des nombres aléatoires
    return Math.floor(Math.random()*(max+1))+min;
}
function viewportSize() {// Fonction qui donne les dimensions
  var d = document.documentElement;
  return {
    height: d.clientHeight,
    width: d.clientWidth
  };
}
var color = ['red','yellow','darorange','magenta','cyan'], 
voeux = ['PROSPERITY', 'JOY', 'PEACE', 'HAPPINESS', 'WISDOM', 'WEALTH', 'HEALTH', 'STRENGTH', 'LONGEVITY', 'PERSEVERANCE', 'LOVE'];

//Fonction principale
$(function(){
  let fire = 1, taille = viewportSize(),duree_explosion = 0, vitesse = 0, positionY = 0, positionX = 0, stop = 0;
  $('html').css({
    'background-image':'url("ciel.jpg")'
  });
  //Initialisation
    vitesse = 20;
    positionY = taille.height;
    positionX = taille.width/2;
    duree_explosion = 0;
    stop = 20;
    $('body').append('<div class="fire" id="fire"></div>');
    $('#fire').css({
        'top':positionY+'px',
        'left':positionX+'px'
    });
  setInterval(function(){
    taille=viewportSize();
    if(positionY <= stop){
	   //positionY = taille.height;
     // positionX = taille.width/2;
    }
     else
      positionY -= vitesse;
      $('#fire').css({
        'top':positionY+'px',
        'left':positionX+'px'
    });
   
  },45);
    
});
