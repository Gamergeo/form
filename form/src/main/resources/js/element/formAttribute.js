/**
 * Return the closest form attribute of name name
 */
$.fn.formAttribute = function(name) {
	
	let attributes = $([]);
	
	this.each(function() {
		attributes = attributes.add($(this).closestForm().find("input[name='" + name + "']"));
	});
	
	if (attributes.length == 0) {
		throw 'Attribut non trouvé';
	} else if (attributes.length == 1) {
		return attributes.eq(0).val();	
	} else {
		let results = [];
		
		for (let i; i < attributes.length; i++) {
			results[i] = attributes[i].val();
		}
		
		return results;
	}
}