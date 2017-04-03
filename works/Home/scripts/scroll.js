function Scroll(sSelector) {
	var s = this;

	s.init(sSelector);

	s.scrollBtn = s.objectFind(".scrollButton");

	s.slowScroll = function() {
		$("html, body").stop()
		.animate({scrollTop:0}, 1000);
	}

	s.showHideBtn = function() {
		if($(window).scrollTop() > $(window).height()) {
			s.scrollBtn.fadeIn(1000);
		}
		else {
			s.scrollBtn.fadeOut(1000);
		}
	}

	$(window).scroll(s.showHideBtn);
	s.scrollBtn.click(s.slowScroll);
}

Scroll.prototype = new Component(); 