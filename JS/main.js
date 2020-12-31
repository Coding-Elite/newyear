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

//Fonction principale
$(function(){
  let fire = 10, taille = viewportSize(), vitesse = [], positionY = [], positionX = [], moveX = [];
  //Initialisation
  for(let i = 0; i <= fire;i++)
  {
    vitesse[i] = 20;
    positionY[i] = randfunc(taille.height,taille.height+100);
    positionX[i] = randfunc(1,taille.width);
    $('body').append('<div class="fire" id="fire'+i+'"></div>');
    $('#fire'+i).css({
        'top':positionY[i]+'px',
        'left':positionX[i]+'px'
    });
  }
  setInterval(function(){
    taille=viewportSize();
    for(let i = 0;i < fire; i++)
   {
    positionY[i] -= vitesse[i];
    $('#fire'+i).css({
      'top':positionY[i]+'px'
    });
   }
  },45);
    
});
