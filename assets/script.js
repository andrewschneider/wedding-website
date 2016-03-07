$(function() {

    $(".navbar-link").click(function () {
        $(".navbar-link").removeClass("active");
        $(this).addClass("active");
    });

    L.mapbox.accessToken = "pk.eyJ1IjoiYWRzY2huZWlkZXIiLCJhIjoiSlcxbGd0NCJ9.9iU2iiEVRUSxpiQXkV_zFg";
    var map = L.mapbox.map(
        'map',
        'mapbox.light',
        {
            zoomControl: false
        }
    ).setView([45.994231, -122.370786], 6);

    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.keyboard.disable();

    L.mapbox.featureLayer({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.370786, 45.994231]
        },
        properties: {
            'marker-size': 'large',
            'marker-color': '#3887BE',
            'marker-symbol': 'marker'
        }
    }).addTo(map);

});
