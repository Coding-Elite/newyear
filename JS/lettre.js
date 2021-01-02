function addBlocLettre(X,Y,nombre){
	let col;
	for(let i = 0; i<nombre; i++){
		$('body').append('<div class="lettre '+i+'" ></div>');
		col = randfunc(0,color.length-1)
		$('.lettre.'+i).css({
			'top':Y+'px',
			'left':X+'px',
			'background-color':color[col]
		});
	}
}
function removeBlocLettre(){
	$('.lettre').remove();
}
function lettre(X,Y,lettre) {
	let px,py;
	switch(lettre){
		case 'a':
		{
			addBlocLettre(X,Y,11);
			px = X-37.5; py =Y+ 62.5;
			$('.lettre.0').css({
				'top':py+'px',
				'left':px+'px'
			});
			px = X+37.5; py =Y+ 62.5;
			$('.lettre.1').css({
				'top':py+'px',
				'left':px+'px'
			});
			px = X; py =Y- 62.5;
			$('.lettre.2').css({
				'top':py+'px',
				'left':px+'px'
			});
			px = X-18.75; py =Y;
			$('.lettre.3').css({
				'top':py+'px',
				'left':px+'px'
			});
			px = X+18.75; py =Y;
			$('.lettre.4').css({
				'top':py+'px',
				'left':px+'px'
			});
			px = X-7; py =Y;
			$('.lettre.5').css({
				'top':py+'px',
				'left':px+'px'
			});
			px = X-10; py =Y-31.25;
			$('.lettre.6').css({
				'top':py+'px',
				'left':px+'px'
			});
			px = X+10; py =Y-31.25;
			$('.lettre.7').css({
				'top':py+'px',
				'left':px+'px'
			});
			px = X-30.5; py =Y+31.25;
			$('.lettre.8').css({
				'top':py+'px',
				'left':px+'px'
			});
			px = X+30.5; py =Y+31.25;
			$('.lettre.9').css({
				'top':py+'px',
				'left':px+'px'
			});
			px = X+7; py =Y;
			$('.lettre.10').css({
				'top':py+'px',
				'left':px+'px'
			});
			setTimeout(removeBlocLettre,2000);
		}
		case 'b':
		{
		}
		case 'c':
		{
		}
		case 'd':
		{
		}
		case 'e':
		{
		}
		case 'f':
		{
		}
		case 'g':
		{
		}
		case 'h':
		{
		}
		case 'i':
		{
		}
		case 'j':
		{
		}
		case 'k':
		{
		}
		case 'l':
		{
		}
		case 'm':
		{
		}
		case 'n':
		{
		}
		case 'o':
		{
		}
		case 'p':
		{
		}
		case 'q':
		{
		}
		case 'r':
		{
		}
		case 's':
		{
		}
		case 't':
		{
		}
		case 'u':
		{
		}
		case 'v':
		{
		}
		case 'w':
		{
		}
		case 'x':
		{
		}
		case 'y':
		{
		}
		case 'z':
		{
		}
	}
}