/**
 * objecteify form for json
 */
$.fn.objectifyForm = function() {
	
	if ($(this).is('form')) {
		
		var formArray = $(this).serializeArray();
		
		//serialize data function
		var returnArray = {};
		for (var i = 0; i < formArray.length; i++){
		    returnArray[formArray[i]['name']] = formArray[i]['value'];
		}
		
		return returnArray;
	}
}