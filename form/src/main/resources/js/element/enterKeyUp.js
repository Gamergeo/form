/**
 * Associe correctement la touche entrer avec le fait de save le formulaire
 */
$.fn.enterKeyUp = function (method) {
	
	return this.each(function() {
		
		if ($(this).is('input:not([type=hidden])')) {
						
			$(this).keydown(function(e){
			    if (e.keyCode == 13) {
				
					if (method) {
						method.invoke();
					}
			    	return false;
				}
			})
		}
		
		$(this).find('input:not([type=hidden])').each(function () {
			
			$(this).keydown(function(e){
			    if (e.keyCode == 13) {
					if (method) {
						method.invoke();
					}
			    	return false;
				}
			})
		});
	});
}