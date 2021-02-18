//Name of the cache
const staticDevCoffee = "dev-coffee-site-v1"
//assets are data to store in the cache
const assets = [
    "/",
    "/index.html",
    "/js/app.js",
    "/images/coffe1.jpg",
    "/images/coffe2.jpg",
    "/images/coffe3.jpg",
    "/images/coffe4.jpg",
    "/images/coffe5.jpg",
    "/images/coffe7.jpg",
    "/images/coffe8.jpg",
    "/images/coffe9.jpg",
    "/images/coofe6.jpg",
];
//to store the asset in cache , we need to attach a listner to self
//Self property return the current window, and doften used for the comparison
//self is the service worker itself . It enables us to listen to life cycle events and to do something in return
/*
-the service worker has several life cycle and one of them is install event.It runs when service worker is installed. It's triggered as soon  as the worker executes, and it's only called once per service worker.
-When the install event is fired,we run the callback which give us access to the event object.
-caching is take time and it's asynchronus,So to handle it we need to use waitUntil(),which wait until the action finish
-Once the cache API is ready,we can run the open() method  and create our cache by passing its name as an argument.
-Then it returns a promise, which help us to store ousr assets in the cache with cache.addAll(assets)
 */
//now successfully cached our assets in the browser .Next time we load the page ,the service worker will handle the request and fetch the cache if we are offline

self.addEventListener("install",installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})
//Next fetch our cache || Fetch the assets 
 /*
 - Here we use the fetch event to well,get back our data.
 - The callback gives us access to fetchEvent
 - Then we attach respondWith() to prevent the browser default response.
 - Instead it returns a promise becasue the fetch action can take time to finish.Instead it returns a promise because the fetch action can take time to finish. 
 -  And once the cache ready ,we appply caches.matche(fetchEvent.request).It will checek if something in the cache matches fetchEvent.request. 
 - By the way , fetchEvent.request is just our array of assests.
  */
 self.addEventListener("fetch",fetchEvent => {
     fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
     )
 })
 //But a service worker alone can't do the job. We need to register it in our project.

 //Register the service worker
 /*
 - Here we checking if the serviceWorker is supported by the current browser
 - Then we listen to the page load event to register our service worker by passing the name eof our file serviceWorker.js to navigator.serviceWorker.register() as a parameter to register our worker
  */
 if("serviceWorker" in navigator) {
     window.addEventListener("load",function() {
         navigator.serviceWorker
         .register("/serviceWorker.js")
         .then(res => console.log("Service worker registred"))
         .catch(err => console.log("Service worker not registred",err))
     })
 }