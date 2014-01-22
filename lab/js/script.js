$(function() {
    var caja = $('.caja');

    var intX = 240;
    var intY = 314;
    var fila = 0;

    var slider = $('#slider');

    slider.change(function() {
    	var valor = slider.attr('value');
    	var razon = valor % 5;
    	
    	fila = Math.floor(valor / 5);

    	var valorX = -(razon * intX );
    	var valorY = -(fila * intY);

    	$('.sprite').css('backgroundPosition', valorX + 'px ' + valorY + 'px');

    	var posicion = valor + " : " + $('.sprite').css('backgroundPosition');

		$('#valor').html(posicion);
    })
    .change();

    // TweenMax.staggerFrom(caja, 2, {
    //     top: "800px",
    //     rotation: "90",
    //     ease: Cubic.easeOut
    // }, 0.2);

});