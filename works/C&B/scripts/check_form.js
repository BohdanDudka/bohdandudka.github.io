function formChecker(sSelector) {
	var f = this;
	f.form         = $(sSelector);
	f.textfields   = f.form.find(".subscribe__input");
	f.messageError = f.form.find(".b-form__message_error");

	f.check = function(event) {
		event.preventDefault();

		var formError = false

		f.textfields.each(function() {
			var currentTextfield = $(this)
				,textfieldError = f.checkTextfield(currentTextfield);
				

			if(textfieldError) {
				formError = true;
			}
		});
			var messageEffect = formError ? "slideDown" : "slideUp";
			f.messageError.stop()[messageEffect]();
	}

	f.checkTextfield = function(textfield) {
		var regexps = {
			 "email"   : "^([a-z0-9_-]+\\.)*[a-z0-9_-]+@([a-z0-9_-]+\\.){1,6}[a-z]{2,6}$"
		}
		,currentTextfield = textfield.length ? textfield : $(this)
		,currentRe = new RegExp(regexps[currentTextfield.attr("name")])
		,textfieldError = !currentTextfield.val().match(currentRe);

		currentTextfield.toggleClass("b-textfield_error", textfieldError);

		return textfieldError;
	}
	
	f.form.submit(f.check);
	f.textfields.blur(f.checkTextfield);

}
