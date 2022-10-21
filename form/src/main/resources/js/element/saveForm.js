/**
 * Save le form
 */
$.fn.saveForm = function (success) {
	
	return this.each(function() {
		let options = new Object();
		options.url = $(this).formUrl('save');
		options.success = success;
		
		$(this).submitForm(options);
	});
}