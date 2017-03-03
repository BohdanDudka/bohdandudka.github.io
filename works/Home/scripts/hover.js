$( document ).ready(function() {
    jQuery('.item-image').hover(
		function(){
			$(this).find(".cover-item-gallery").stop().fadeIn();
		},
		function(){
			$(this).find(".cover-item-gallery").stop().fadeOut();
		}
    );
});