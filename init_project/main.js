
var map = L.map('map-container').setView([42.705, 23.15], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([42.705, 23.15]).addTo(map);

var circle = L.circle([42.705, 23.15], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [42.702, 23.12],
    [42.700, 23.10],
    [42.707, 23.17]
]).addTo(map);

marker.bindPopup("<b>Hello there</b><br>I am awsome").openPopup();
circle.bindPopup("I am circle");
polygon.bindPopup("I am polygon");

var popup = L.popup()
    .setLatLng([42.715, 23.12])
    .setContent("Look at me")
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("gegeeg " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);