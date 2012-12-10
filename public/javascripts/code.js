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
var speed = 0;
var direction="top";
var tab = document.getElementById("scrollbox");
var tab1 = document.getElementById("boximg");
var leftDir = document.getElementById("leftDir");
var rightDir = document.getElementById("rightDir");
function marquee(){
    switch(direction){
        case "top":
           
                tab.scrollTop+=100;
           
        break;
        case "bottom":
           
                tab.scrollTop-=100;
            
        break;
    }
}
function changeDirection(dir){
   direction = dir;
}
// tab.onmouseover = function(){clearInterval(timer);};
//tab.onmouseout = function(){timer = setInterval(marquee,speed);};
leftDir.onclick = function(){
  changeDirection("bottom");
  marquee();
  
};
rightDir.onclick = function(){
  changeDirection("top");
  marquee();
};