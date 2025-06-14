


var map = L.map('map').setView([42.57459457391824, 21.029498668349444], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([42.57459457391824, 21.029498668349444]).addTo(map); marker.bindPopup("Adem Jashari airport")


L.Routing.control({
  waypoints: [
    L.latLng(42.651210689945614, 21.168111554858857),
    L.latLng(42.57459457391824, 21.029498668349444)
  ]
}).addTo(map);








