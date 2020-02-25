$(function($) {
	$('.js-burger').on('click', function() {
		$('.burger-fade').fadeIn();
	})	
	
	$('.popup-burger-close').click(function() {
		$(this).parents('.burger-fade').fadeOut();
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.burger-fade').fadeOut();
		}
	});
	
	$('.burger-fade').click(function(e) {
		if ($(e.target).closest('.popup-burger').length == 0) {
			$(this).fadeOut();					
		}
	});
});