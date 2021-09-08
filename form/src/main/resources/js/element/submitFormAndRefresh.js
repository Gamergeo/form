/**
 * Save le form
 */
$.fn.submitFormAndRefresh = function (element, options) {
	
	return this.each(function() {
		let form = $(this).closestForm();
		options.data =  form.objectifyForm();
		options.error = (errorMessage) => {
			form.handleError(errorMessage);
		};
		element.postHtml(options);
	});
}