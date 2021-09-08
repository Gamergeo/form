/**
 * get the form url for given methpd
 */
$.fn.formUrl = function (method) {
	
	let form = $(this).closestForm();
	
	if (!form.length) {
		throw 'enclosing form not found';
			
	} else {
		let namespace = form.data("namespace");
	
		if ($.isEmptyObject(namespace)) {
			throw 'namespace must be in set n form data';
		}
		
		return namespace + "/" + method + ".do";
	}
}