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

function detonation(positionX,positionY,z){
  let x,y;
  for(let i = 1;i<= 5;i++){
    $('body').append('<div class="explose" id="explose'+z+i+'"></div>');
    $('#explose'+x+i).css({
      'top':positionY+'px',
      'left':positionX+'px',
      'transition':0.5+'s'
    });
  }
  x =positionX-20; y = positionY+20;
  $('#explose'+z+1).css({
    'top':y+'px',
    'left':x+'px'
  });
  x =positionX-25; y = positionY-20;
  $('#explose'+z+2).css({
    'top':y,
    'left':x
  });
  x =positionX; y = positionY-25;
  $('#explose'+z+3).css({
    'top':y,
    'left':x
  });
  x =positionX+20; y = positionY-18;
  $('#explose'+z+4).css({
    'top':y,
    'left':x
  });
  x =positionX+20; y = positionY+25;
  $('#explose'+z+5).css({
    'top':y,
    'left':x
  });
}

//Fonction principale
$(function(){
  let fire = 10, taille = viewportSize(),duree_explosion = [], vitesse = [], positionY = [], positionX = [], stop = [];
  //Initialisation
  for(let i = 0; i <= fire;i++)
  {
    vitesse[i] = 10;
    positionY[i] = randfunc(taille.height,taille.height+100);
    positionX[i] = randfunc(1,taille.width);
    duree_explosion[i] = 0;
    stop[i] = randfunc(20,120);
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
     if(positionY[i] <= stop[i]){
      $('#fire'+i).css({
        'background-color':'blue',
        'width':'2px',
        'height':'2px',
        'z-index':11
      });
      if(duree_explosion[i]==0)
      {
        detonation(positionX[i],positionY[i],i)
      }
      duree_explosion[i] +=1;
      if(duree_explosion[i]==22){
        positionY[i] = randfunc(taille.height,taille.height+100);
        positionX[i] = randfunc(1,taille.width);
        duree_explosion[i] =0
        $('#fire'+i).css({
          'background-color':'red',
          'width':'7px',
          'height':'7px'
        });
        for(let j = 1;j<= 5;j++)
          $('#explose'+i+j).remove();
      }
     }
     else
      positionY[i] -= vitesse[i];
      $('#fire'+i).css({
        'top':positionY[i]+'px',
        'left':positionX[i]+'px'
    });
   }
  },45);
    
});
