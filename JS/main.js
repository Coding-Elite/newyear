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
var color = ['red','yellow','darkorange','magenta','cyan', 'MediumVioletRed', 'BlueViolet', 'Indigo', 'GreenYellow', 'LimeGreen', 'DarkTurquoise', 'MediumBlue', 'Goldenrod'], 
voeux = ['PROSPERITY', 'JOY', 'PEACE', 'HAPPINESS', 'WISDOM', 'WEALTH', 'HEALTH', 'STRENGTH', 'LONGEVITY', 'PERSEVERANCE', 'LOVE'];

//Fonction principale
$(function(){
  let k = 0, taille = viewportSize(),duree = 0, vitesse = 0, positionY = 0, positionX = 0, stop = 0;
  $('html').css({
    'background-image':'url("ciel.jpg")'
  });
  //Initialisation
    vitesse = 20;
    positionY = taille.height;
    positionX = taille.width/2;
    duree_explosion = 0;
    stop = 100;
    $('body').append('<div class="fire"></div>');
    $('.fire').css({
        'top':positionY+'px',
        'left':positionX+'px'
    });
  setInterval(function(){
    taille=viewportSize();
    if(positionY <= stop && k!=1){
      $('.fire').css({
        'opacity':'0',
        'top':positionY+'px',
        'left':positionX+'px'
      });
      lettre(positionX,positionY,'a');
      
      k = 1;
    }
    else if(k==1 && duree!=45){
      duree +=1;
    }
    else if(duree==45){
      $('.lettre').remove();
      positionY = taille.height;
      $('.fire').css({
        'opacity':'1',
        'top':positionY+'px',
        'left':positionX+'px'
      });
      k = 0;duree = 0;
    }
    else if(k !=1 )
    {
      positionY -= vitesse;
      $('.fire').css({
        'top':positionY+'px',
        'left':positionX+'px'
      });
    }
  },45); 
});
