function initMap() {
    var uluru = { lat: 59.9421891, lng: 30.2808191 };
    var baloon = 'css/img/baloon.png';
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: baloon
    });
}
