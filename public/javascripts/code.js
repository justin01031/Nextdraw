$('.animateMe').each(function(){
		//console.log('hi');
		$(this)
			.css('position','relative')
			.animate(
			{
				opacity: 100,
				
			},
			'slow',
			function(){$(this).show();}
				);
		});