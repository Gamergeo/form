/**
 * objecteify form for json
 */
$.fn.objectifyForm = function() {
	
	if ($(this).is('form')) {
		
		var formArray = $(this).serializeArray();
		
		//serialize data function
		var returnArray = {};
		for (var i = 0; i < formArray.length; i++) {
			
			let name = formArray[i]['name'];
			let value = formArray[i]['value'];
			
			// Si l'attribut finit par date ou Date, c'est une date
			if (name.endsWith('date') || name.endsWith('Date') && value) {
				value = new Date($.parseDate(value));
			}
			
			// Cas des checkboxes
			if (!$.isEmptyObject(returnArray[name])) {
				returnArray[name] = returnArray[name] + "," + value;
			} else {
				returnArray[name] = value;	
			}
		}
		
		return returnArray;
	}
}