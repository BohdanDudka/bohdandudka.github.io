function Scroll(sSelector) {
	var s = this;

	s.init(sSelector);

	s.scrollLink = s.objectFind(".scrollLink");


	s.slowScroll = function() {
		$("html, body")
		.stop()
		.animate({scrollTop:0},1000);
	}


	s.showHideLink = function() {
		if($(window).scrollTop() > $(window).height()) {
			s.scrollLink.fadeIn(1000);
		}
		else {
			s.scrollLink.fadeOut(1000);
		}
	}


	$(window).scroll(s.showHideLink);
	s.scrollLink.click(s.slowScroll);
}



Scroll.prototype = new Component();