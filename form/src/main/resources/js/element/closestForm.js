/**
 * Return the closest enclosing form
 */
$.fn.closestForm = function() {
	
	let results = $([]);
	
	this.each(function() {
		results = results.add($(this).closest('form'));
	});
	
	return results;
}