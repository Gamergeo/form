/**
 * Save le form
 */
$.fn.submitForm = function (options) {
	
	return this.each(function() {
		let form = $(this).closestForm();
		options.data =  form.serialize();
		options.error = (errorMessage) => {
			form.handleError(errorMessage);
		};
		$.post(options);
	});
}