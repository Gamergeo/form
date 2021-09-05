/**
 * Save le form
 */
$.fn.submitForm = function (options) {
	
	return this.each(function() {
		let form = $(this).closestForm();
		options.data =  $(form).objectifyForm();
		$.post(options);
	});
}