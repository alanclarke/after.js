(function(){
	afterjs_opts = window.afterjs_opts;
	if(typeof afterjs_opts!== 'undefined'){
		if(afterjs_opts.manual_run){

			return;
		}
	} else {
		var afterjs_opts = {};
	}

	/* runs after.js when the dom is ready */
	if(typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['src/domready/domready', 'src/after'], function(domready, afterjs) {
			return domready(function(){
				afterjs(afterjs_opts);
			});
		});
	} else if(domready && afterjs) {
		domready(function(){
			afterjs(afterjs_opts);
		});
	}

})();