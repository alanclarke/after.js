/*
 *  after
 *  https://github.com/alanclarke/after.js
 *
 *  Copyright (c) 2012 Alan Clarke
 *  Licensed under the GPL license.
 *
 *  structure and logic largely taken from http://jquery.lukelutman.com/plugins/pseudo/
 *  but uses a different technique to scan and apply rules which avoids the requirement for special syntax
 *  and refactored to remove jquery dependency
 */

 var after;


 (function(){

    function fn_after(getElements) {

      return function(opts) {

        getElements = opts.no_jquery?getElements:($ || getElements );

        var patterns = {
          text: /^['"]?(.+?)["']?$/,
          url: /^url\(["']?(.+?)['"]?\)$/
        };

        function clean(content) {
          if(content && content.length) {
            var text = content.match(patterns.text)[1],
              url = text.match(patterns.url);
            return url ? '<img src="' + url[1] + '" />' : text;
          }
        }

        function inject(prop, els, rule) {
         var style = rule.style;
          for(var i = 0; i < els.length; i++) {
            var elem = els[i];
            var pseudoel = getElements('.pseudo-after', els[i]);
            if(!pseudoel.length) {
              pseudoel = document.createElement('span');
              elem.appendChild(pseudoel);
            }
            pseudoel.className = 'pseudo-after';
            pseudoel.innerHTML = clean(rule.style.content);

            //copy any style information
            for(var cssprop in style) {
              if(style[cssprop]) {
                //only apply supported props
                try {
                  pseudoel.style[cssprop] = style[cssprop];
                } catch(e) {}
              }
            }
          }
        }


        //search stylesheets
        for(var i = 0; i < document.styleSheets.length; i++) {
          //if it doesn't work, it probably shouldn't
          try{
            var cssrules;
            if(document.styleSheets[i].cssRules) {
              cssrules = document.styleSheets[i].cssRules;
            } else if(document.styleSheets[i].rules) {
              cssrules = document.styleSheets[i].rules;
            } else {
              cssrules = [];
            }

            for(var j = 0; j < cssrules.length; j++) {
              try{
              var rule = cssrules[j],
                selector = rule.selectorText.replace(/:+\w+/gi, '');

                //before or after rules are unknown in versions of ie that don't support it
                if(opts.force || (/:+unknown/gi.test(rule.selectorText))) {
                  if(rule.style.content){
                    var els = getElements(selector.toString());
                    if(els.length){
                      inject('before', els, rule);
                    }
                  }
                }
              } catch (e){}
            }
          } catch(e){}
        }

        return !opts.callback || opts.callback();
      };
    }

    if(typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['src/getElements'], fn_after);
    } else if (getElements) {
        after = fn_after(getElements);
    }
    
})();

