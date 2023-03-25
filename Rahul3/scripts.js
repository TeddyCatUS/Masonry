var script = function(src) {
    var e = document.createElement('script');
    e.async = true;
    e.src = src;
    document.getElementsByTagName('head')[0].appendChild(e);
};

script("//s3.buysellads.com/ac/bsa.js");