var NOAB = (function () {return {error: function (t) {console.log("Error");const scriptUrl = 'https://cdn.carbonads.com/carbon.js?serve=CK7DEKQ7&placement=w3bitscom';loadScript(scriptUrl, document.querySelector("#_gads"), '_carbonads_js', document.querySelector("#_gads"), document.querySelector("#_gads_html"), document.querySelector("#_gads_inline"));},success: function (t) {console.log("Success");}};})();const loadScript = (source, beforeEl, id = null, removeEl = null, removeHTML = null, removeJS = null, removeCSS = null, async = true, defer = true) => {return new Promise((resolve, reject) => {let script = document.createElement('script');const prior = beforeEl || document.getElementsByTagName('script')[0];script.async = async;script.defer = defer;if (id) script.id = id;function onloadHander(_, isAbort) {if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {script.onload = null;script.onreadystatechange = null;script = undefined;if (isAbort) {reject();} else {if (removeEl) removeEl.parentNode.removeChild(removeEl);if (removeHTML) removeHTML.parentNode.removeChild(removeHTML);if (removeJS) removeJS.parentNode.removeChild(removeJS);if (removeCSS) removeCSS.parentNode.removeChild(removeCSS);resolve();}}}script.onload = onloadHander;script.onreadystatechange = onloadHander;script.src = source;prior.parentNode.insertBefore(script, prior);});}

var script = function(src) {
    var e = document.createElement('script');
    e.async = true;
    e.src = src;
    document.getElementsByTagName('head')[0].appendChild(e);
};
script("//s3.buysellads.com/ac/bsa.js");
