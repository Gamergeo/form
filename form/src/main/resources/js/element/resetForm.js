/**
 * Reset le form
 */
$.fn.resetForm = function () {
	
	return this.each(function() {
		$(this).closestForm()[0].reset();
	});
}