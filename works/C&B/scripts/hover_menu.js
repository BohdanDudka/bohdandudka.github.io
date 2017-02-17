function Menu (sSelector) {
	var m = this;

	//properties
	m.menu = $(sSelector); // ul
	m.menuItem = m.menu.find('li'); // looking for menuItem "list- li"


	//methods

	m.showSubMenu = function() {
		$(this).children('ul').stop().css('display', 'block').animate({opacity:1}, 800);
	}

	m.hideSubMenu = function() {
		$(this).children('ul').stop().animate({opacity:0}, 600
			,function() { 
			$(this).css("display", "none")
		});
	}

	// events 
	
	m.menuItem.mouseover(m.showSubMenu);
	m.menuItem.mouseout(m.hideSubMenu);

}