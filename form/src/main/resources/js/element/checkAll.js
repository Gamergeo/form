/**
 * Check all the ckecboxes for property
 */
$.fn.checkAll = function(property, check) {
	
	return this.each(function() {
		
		let form = $(this).closestForm();
		
		form.formAttribute(property).each(function() {
			
			$(this).prop('checked', check);
		});
	});
}