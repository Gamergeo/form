/**
 * Save le form
 */
$.fn.submitForm = function (options) {
	
	if ($.isEmptyObject(options)) {
		options = new Object();
	}
	
	return this.each(function() {
		let form = $(this).closestForm();
		options.data =  form.objectifyForm();
		options.error = (errorMessage) => {
			form.handleError(errorMessage);
		};
		
		if ($.isEmptyObject(options.url)) {
			options.url = $(this).formUrl();
		}
		
		$.post(options);
	});
}