/**
 * Save le form
 */
$.fn.submitForm = function (options) {
	
	if ($.isEmptyObject(options)) {
		options = new Object();
	}
	
	return this.each(function() {
		let form = $(this).closestForm();
		
		options.error = (errorMessage) => {
			form.handleError(errorMessage);
		};
		
		if ($.isEmptyObject(options.url)) {
			options.url = $(this).formUrl();
		}
		
		if (form.attr("enctype") == "multipart/form-data") {
			return form.submitMultipartForm(options);
		}
		
		options.data =  form.objectifyForm();

		$.post(options);
	});
}