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
    $('body').append('<div class="fire" id="fire1"></div>');
    $('#fire1').css({
        'bottom':'150px',
        'left':'500px'
    });
});
