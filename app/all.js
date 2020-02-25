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
$(function($) {
	$('.btn').on('click', function() {
		$('.popup-fade').fadeIn();
	})	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
var tab = function() {
  var tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

      tabNav.forEach(function(item) {
        item.addEventListener('click', selectTabNav)
      });

      function selectTabNav() {
        tabNav.forEach(function(item) {
          item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
      }

      function selectTabContent (tabName) {
        tabContent.forEach(function(item) {
          item.classList.contains(tabName) ? 
          item.classList.add('is-active') : 
          item.classList.remove('is-active');
        })
      }
};

tab();