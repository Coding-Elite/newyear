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
/*function detonation(positionX,positionY,z){
  let x,y;
  for(let i = 1;i<= 5;i++){
    $('body').append('<div class="explose" id="explose'+z+i+'"></div>');
    $('#explose'+x+i).css({
      'top':positionY+'px',
      'left':positionX+'px',
      'transition':0.5+'s'
    });
  }
  x =positionX-30; y = positionY+30;
  $('#explose'+z+1).css({
    'top':y+'px',
    'left':x+'px',
    'background-color':color[randfunc(0,4)]
  });
  x =positionX-35; y = positionY-30;
  $('#explose'+z+2).css({
    'top':y,
    'left':x,
    'background-color':color[randfunc(0,4)]
  });
  x =positionX; y = positionY-35;
  $('#explose'+z+3).css({
    'top':y,
    'left':x,
    'background-color':color[randfunc(0,4)]
  });
  x =positionX+30; y = positionY-38;
  $('#explose'+z+4).css({
    'top':y,
    'left':x,
    'background-color':color[randfunc(0,4)]
  });
  x =positionX+30; y = positionY+35;
  $('#explose'+z+5).css({
    'top':y,
    'left':x,
    'background-color':color[randfunc(0,4)]
  });
}
*/
//Fonction principale
$(function(){
  let fire = 1, taille = viewportSize(),duree_explosion = 0, vitesse = 0, positionY = 0, positionX = 0, stop = 0;
  $('html').css({
    'background-image':'url("ciel.jpg")'
  });
  //Initialisation
    vitesse = 20;
    positionY = randfunc(taille.height,taille.height);
    positionX = taille.width/2;
    duree_explosion = 0;
    stop = randfunc(20,120);
    $('body').append('<div class="fire" id="fire"></div>');
    $('#fire').css({
        'top':positionY+'px',
        'left':positionX+'px'
    });
  setInterval(function(){
    taille=viewportSize();
    if(positionY <= stop){
    //$('body').append('<div id="p">P</div>');
	positionY = randfunc(taille.height,taille.height);
    positionX = taille.width/2;
    }
     else
      positionY -= vitesse;
      $('#fire').css({
        'top':positionY+'px',
        'left':positionX+'px'
    });
   
  },45);
    
});
