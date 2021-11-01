function initMap(){
    var options = {
        zoom:8,
        center:{lat:-6.169964201676129, lng:106.7971291759935}
    }

    var map = new 
    google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position:{lat:-6.169964201676129, lng:106.7971291759935},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.infoWindow({
        content:'<h1>Kevin Refinaldi Berlin</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map,marker);
    });
}

addMarker({lat:-6.169964201676129, lng:106.7971291759935})

function addMarker(coords){
    var marker = new google.maps.Marker({
        position:coords,
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
}