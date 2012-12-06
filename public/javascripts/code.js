$('.animateMe').each(function(){
		//console.log('hi');
		$(this)
			.css('position','relative')
			.animate(
			{
				opacity: 100,
				top:    0
			},
			'slow',
			function(){$(this).show();}
				);
		});
$('#hide').css("opacity","0");;