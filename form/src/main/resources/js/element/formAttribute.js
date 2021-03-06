/**
 * Return the closest form attribute of name name
 */
$.fn.formAttribute = function(name) {
	
	let attributes = $([]);
	
	this.each(function() {
		attributes = attributes.add($(this).closestForm().find("input[name='" + name + "']"));
		attributes = attributes.add($(this).closestForm().find("select[name='" + name + "']"));
	});
	
	return attributes;
}