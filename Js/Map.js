
$( document ).ready(function() {

    function initMap() {
        var myLatLng = {lat: 12.982009, lng: 80.187024};

        var myOptions = {
            zoom: 16,
            center: myLatLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var element = document.getElementById("map");
        console.log(element);
        var map = new google.maps.Map(element, myOptions);

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title: 'My Current Location!'
        });
    }

    initMap();

});
