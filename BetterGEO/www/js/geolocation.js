/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


//prints location ;
function rungeolocation(){
     var onSuccess = function(position) {
         alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n');
     };
    function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function getPos(position){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
            };
        window.alert("PROGRAM RAN");
        return pos;
        });
        
    }
}