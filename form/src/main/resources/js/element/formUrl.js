/**
 * get the form url for given methpd
 */
$.fn.formUrl = function (method) {
	
	let form = $(this).closestForm();
	
	if (!form.length) {
		throw 'enclosing form not found';
			
	} else {
		let namespace = form.data("namespace");
		
		if ($.isEmptyObject(method)) {
			method = form.attr("action");
		}
	
		if ($.isEmptyObject(namespace)) {
			return method;
		}
		
		return namespace + "/" + method + ".do";
	}
}