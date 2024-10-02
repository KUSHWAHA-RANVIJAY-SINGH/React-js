setTimeout(function () {
    console.log('setTimeout() function running');
   }, 5000);
   setInterval(function () {
    console.log('setInterval() function running');
   }, 5000);
   setImmediate(function () {
    console.log('setImmediate() function running');
   });