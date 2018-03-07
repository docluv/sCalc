const preCacheName = "pre-cache-calc",
    preCacheFiles = [
        "/",
        "css/calc.css",
        "calc-black-v5.0.html",
        "js/zepto/zepto.min.js",
		"js/zepto/fx.js",
		"js/zepto/touch.js",
		"js/common.js",
		"js/calc.js",
        "images/delete1.png",
        "images/thumb/2.jpg",
        "images/thumb/3.jpg",
        "images/thumb/4.jpg",
        "images/thumb/5.jpg",
        "images/thumb/6.jpg",
        "images/thumb/7.jpg",
        "images/thumb/8.jpg"
    ];


self.addEventListener("install", event => {

    console.log("installing precache files");

    caches.open(preCacheName).then(function (cache) {

        return cache.addAll(preCacheFiles);

    });

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request).then(response => {

            if (!response) {

                //fall back to the network fetch
                return fetch(event.request);

            }

            return response;

        })

    )

});
