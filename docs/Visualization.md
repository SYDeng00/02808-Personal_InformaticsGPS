# Visualization


```js
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
```


```js
import {require} from "npm:d3-require";
```

```js

let heat = require('leaflet.heat@0.2.0/dist/leaflet-heat.js')
  .catch(() => window.L.heatLayer)

// let markerCluster = require('leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js').catch(() => window.L.MarkerClusterGroup)





```


```js
function createMap(width, xCenter, yCenter, Places) {
  // Create a div for the map
  let container = document.createElement('div');
  container.style.width = `${width}px`;
  container.style.height = `${width / 1.6}px`;

  // Append the container to an existing element, adjust the selector as needed
  document.getElementById('visualization').appendChild(container);

  // Create the Leaflet map in the container
  let map = L.map(container).setView([xCenter, yCenter], 11);
  
  // Add OpenStreetMap layer
//   L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png', {
//   }).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  detectRetina: true
}).addTo(map);

  // Add heat layer with the provided places data

  heat(Places, {radius: 15}).addTo(map);   
  // Define heatLayerPromise
  // Optional: return the map if you need to use it later
  return map;
}


createMap(width, xCenter, yCenter, Places);

```
