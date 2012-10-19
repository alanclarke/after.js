
(function(){

	/* runs after.js when the dom is ready */
	if(typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['src/domready/domready', 'src/after'], function(domready, after) {
			return domready(after);
		});
	} else if(domready && after) {
		domready(after);
	}

})();