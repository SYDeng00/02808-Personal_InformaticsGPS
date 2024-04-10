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
const data = FileAttachment("./data/combined_data.csv").csv();

const start = view(Inputs.date({label: "Start", value: "2022-06-21"}));
const end = view(Inputs.date({label: "End", value: "2022-07-21"}));

// const start1 = Inputs.date({label: "Start", value: "2022-06-21"});
// const end1 = Inputs.date({label: "End", value: "2022-08-21"});



```

```js

function filterDataByDateRange(data, startDate, endDate) {
  // 转换日期字符串为 Date 对象
  const start = new Date(startDate);
  const end = new Date(endDate);

  // 过滤 data 中的对象，检查它们的时间戳是否在给定的区间内
  const filteredData = data.filter(d => {
    // 将每行数据的时间戳字符串转换为 Date 对象
    const startTimestamp = new Date(d.start_timestamp);
    const endTimestamp = new Date(d.end_timestamp);

    // 检查时间戳是否至少部分位于区间内
    // 记录需要在结束日期之前开始，在开始日期之后结束
    return startTimestamp < end && endTimestamp > start;
  });

  return filteredData;
}
```

```js
var filteredData = filterDataByDateRange(data, start, end);

```


```js
function visualizeGPSData(data) {
  let Places = data.map(d => {
    return [+d['latitude'], +d['longitude']];
  });

  // Calculate the center of the map based on data points
  let xCenter = d3.mean(d3.extent(data.map(d => +d['latitude'])));
  let yCenter = d3.mean(d3.extent(data.map(d => +d['longitude'])));

  // Create a map container
  const div = document.createElement("div");
  div.style.height = "800px";
  // Assuming `display` is a method to append the div correctly
  display(div);

  // Initialize the map
  var map = L.map(div).setView([xCenter, yCenter], 10);

  // Add OSM tile layer to the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true
  }).addTo(map);

  // Add a heat layer to the map
  var heat = L.heatLayer(Places, {radius: 15, blur: 15}).addTo(map);

  // Initialize marker clustering
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

  // Add markers to the clustering layer
  Places.forEach(place => {
    var marker = L.marker(new L.LatLng(place[0], place[1]));
    markers.addLayer(marker);
  });
  map.addLayer(markers);
  // Add the clustering layer to the map
  return div;
}
```


<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => visualizeGPSData(filteredData))}
  </div>
</div>