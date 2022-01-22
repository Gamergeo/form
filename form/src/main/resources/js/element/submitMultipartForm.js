/**
 * Submit a multipart form
 */
$.fn.submitMultipartForm = function (options) {
	
	if ($.isEmptyObject(options)) {
		options = new Object();
	}
	
	return this.each(function() {
		let form = $(this).closestForm();

    	var formData = new FormData(form[0]);
   		options.data = formData;

		options.contentType =  false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
    	options.processData =  false, // NEEDED, DON'T OMIT THIS
		
		$.post(options);
	});
}