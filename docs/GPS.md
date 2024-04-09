# GPS Visualization 

<style>
  .my-cluster-icon {
    width: 40px;
    height: 40px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6); /* Lightly transparent white background */
    color: #000; /* Text color changed to black */
    text-align: center;
    line-height: 40px; /* Same as the icon height */
    font-size: 16px; /* Adjust font size as needed */
    font-weight: bold;
    text-shadow: 0 0 3px #fff; /* White text shadow */
  }
</style>

```js
// import * as L from "npm:leaflet";
import L from 'npm:leaflet';
import "npm:leaflet.markercluster";
import "npm:leaflet.heat";
// import "npm:leaflet.featuregroup.subgroup";
const data = FileAttachment("./data/process_gps_data.csv").csv();
```

```js
let Places = data.map(d => {
  return [
    +d['latitude'],
    +d['longitude']
  ];
});

let xCenter = d3.mean(d3.extent(data.map(d => d['latitude'])));
let yCenter = d3.mean(d3.extent(data.map(d => d['longitude'])));


const div = display(document.createElement("div"));
div.style = "height: 800px;";


var map = L.map(div).setView([xCenter, yCenter], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  detectRetina: true
}).addTo(map);


// Heat 
var heat = L.heatLayer(Places, {radius: 15, blur: 15}).addTo(map);


//Count

var markers = L.markerClusterGroup({
  maxClusterRadius: 20, 
  iconCreateFunction: function(cluster) {
    return L.divIcon({
      html: '<b>' + cluster.getChildCount() + '</b>',
      className: 'my-cluster-icon', 
      iconSize: L.point(40, 40) 
    });
  } 
});

for (var i = 0; i < Places.length; i++){
    var a = Places[i];
    var marker = L.marker(new L.LatLng(a[0], a[1]));
    markers.addLayer(marker);
    
}
map.addLayer(markers);

```

