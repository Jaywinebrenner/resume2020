// PARALAX EFFECT

// Make sure section has a tall background image. give the section the following:   

<section id="hero" data-type="background" data-speed="5">
  <h1>STUFF</h1>
</section>

///CSS - repeat fixed is VERY important

#hero {
	background: url('../img/hero-bg.jpg') 50% 0 repeat fixed;
	min-height: 500px;
	position: relative;
	display: table;
	width: 100%;
	padding: 40px 0;
	color: white;
	-webkit-font-smoothing: antialiased;
	text-rendering: optimizelegibility;
}

// Javascript

$(function() {
	
	// Cache the Window object
	var $window = $(window);
	
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
		
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
			
		}); // end window scroll
	});
	
});