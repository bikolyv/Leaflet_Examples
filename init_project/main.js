
var map = L.map('map-container').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
    redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

function onLocationFound(e) {
    var radius = e.accurace;

    L.marker(e.latlng, {icon: greenIcon}).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}
map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);

