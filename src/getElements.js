 /*
  * getElements
  * tiny dom selector engine function adapted from
  * http://www.kirupa.com/forum/showthread.php?253289-JS-Document-getElements
  * linted and now includes wildcard * selector
  * original code by https://github.com/icio http://www.paul-scott.com/
  */


 function getElements(e, elem) {
     if(!e || !e.length || e.length === 0) {
         return [];
     }
     var store = [elem || document.body];
     var store_t = [];
     e = e.split(" ");
     for(var i = 0; i < e.length; i++) {
         var r = {
             id: "",
             tag: "*",
             clas: []
         };
         var c, s, t = e[i];
         while(t.length > 0) {
             s = t.search(/.[#\.]/) + 1 || t.length;
             c = t.substr(0, s);

             if(c.substr(0, 1) === "#") {
                 r.id = c.substr(1);
             } else if(c.substr(0, 1) === ".") {
                 r.clas.push(c.substr(1));
             } else {
                 r.tag = c;
             }
             t = t.substr(s);
         }
         while(store.length > 0) {
             var curr = [],
                 temp = store.shift().getElementsByTagName(r.tag);
             for(var j = 0; j < temp.length; j++) {
                 curr.push(temp[j]);
             }
             while(curr.length > 0) {
                 var ok = true,
                     ce = curr.shift();
                 if(r.id && ce.id !== r.id) {
                     ok = false;
                 }
                 for(j = 0; j < r.clas.length; j++) {
                     var clasName = r.clas[j];
                     if(clasName.charAt(clasName.length - 1) === '*') {
                         var pattern = '\\s' + clasName.substr(0, clasName.length - 1) + '\\S*\\s';
                         if(!new RegExp(pattern).test(" " + ce.className + " ")) {
                             ok = false;
                             break;
                         }
                     } else if((" " + ce.className + " ").indexOf(" " + clasName + " ") === -1) {
                         ok = false;
                         break;
                     }
                 }
                 if(ok) {
                     store_t.push(ce);
                 }
             }
         }
         store = store_t;
         store_t = [];
     }
     return store;
 }



(function(){
     if(typeof define === 'function' && define.amd) {
         // AMD. Register as an anonymous module.
         define(getElements);
     }
})();