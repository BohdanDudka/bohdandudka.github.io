function Component() {
	this.elem = null;

	this.init = function(sSelector) {
		this.elem = $(sSelector); //sSelector - #Scrolling
		if(!this.elem.length) {
			console.error("Невозможно создать объект на основании селектора:", sSelector);
		}
	}

	this.objectFind = function(sClassName) {
		//l.link.find(".scrollLink")
		var object = this.elem.find(sClassName);
		if(object.length) {
			return object;
		}
		else {
			console.error("Невозможно создать объект на основании селектора:", sClassName);
		}
	}

}