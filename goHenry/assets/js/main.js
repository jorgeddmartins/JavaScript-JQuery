
const goHenrySlide = () => {
	
	// Ajax Call
	$.when($.ajax({
		type: "GET",
		async: true,
		cache: true,
		url: "assets/js/data/db.json",
		dataType: 'json'
	}))
	
	.then(
		function(data) {
			
			// Card Template to be displayed / data to be displayed
			let gh = "";
				for (let a in data.cards) 
					gh += '<div class="dummy_card" id="' + data.cards[a].id + '">' +
							'<img src="' + data.cards[a].image_url + '" />' +
							'<div class="blk_Info">' +
								'<div class="tl_Info">' +
									'<img class="ghlogo" src="assets/img/logo.png" />' +
									'<h2>' + data.cards[a].title + '</h2>' +
									'<span class="subtitle">' + data.cards[a].subtitle + '</span>' +
								'</div>' +
								'<p class="text">' + data.cards[a].text + '</p>' +
								'<a class="Lmore" href="https://www.gohenry.com/uk/" target="_blank">Learn More</a>' +
							'</div>' +
					     '</div>', 
			$(gh).appendTo('#slideContainer1, #slideContainer2');	
		}
	)
	
	$.fn.gHenryC = function() {
		return this.on('click', '.arrow', function() {
			
			let width = 334; // Gap Card size
			let speed = 300; // Slide Speed
			
			if($(this).hasClass('prev')) {
				$('.slidetop').animate({
					left: '+=' + width
				}, speed);
			} 
			
			else if($(this).hasClass('next')) {
				$('.slidetop').animate({
					left: '-=' + width
				}, speed); 
			}
			
			else if($(this).hasClass('prev2')) {
				$('.slidebottom').animate({
					left: '+=' + width
				}, speed);
			} 
			
			else if($(this).hasClass('next2')) {
				$('.slidebottom').animate({
					left: '-=' + width
				}, speed); 
			}
		});
	}
	$(document).gHenryC();
}
goHenrySlide();