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
import * as d3 from "npm:d3";
import extent from "npm:d3";
// import "npm:leaflet.featuregroup.subgroup";
const data = FileAttachment("./data/combined_data.csv").csv();
const new_place_data = FileAttachment("./data/new_places.csv").csv();

const start = view(Inputs.date({label: "Start", value: "2022-06-21"}));
const end = view(Inputs.date({label: "End", value: "2022-07-21"}));


```


```js

// Haversine公式计算地球上两点间的距离
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // 地球半径，以米为单位
    const φ1 = lat1 * Math.PI / 180; // φ, λ为纬度、经度的弧度
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // 返回以米为单位的距离
}


function isNewPlace(place, existingPlaces, threshold=50) {
    return !existingPlaces.some(existingPlace => {
        const distance = getDistance(
            place.latitude, place.longitude,
            existingPlace.latitude, existingPlace.longitude
        );
        return distance <= threshold;
    });
}

```



<!-- Function for all data visualization -->
```js

function filterDataByDateRange(data, startDate, endDate) {
  // Convert a date string to a Date object
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Filter the objects in data and check if their timestamps are in the given interval
  const filteredData = data.filter(d => {
    // Converts the timestamp string of each row of data to a Date object.
    const startTimestamp = new Date(d.start_timestamp);
    const endTimestamp = new Date(d.end_timestamp);

    // Check if the timestamp lies at least partially within the interval
    return startTimestamp < end && endTimestamp > start;
  });

  return filteredData;
}


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

  // // Add a heat layer to the map
  // var heat = L.heatLayer(Places, {radius: 20, blur: 10}).addTo(map);

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

```js
var filteredData = filterDataByDateRange(data, start, end);

```

```js
data.forEach(d => d.start_timestamp = new Date(d.start_timestamp)); 

const latestDate = new Date(Math.max(...data.map(d => d.start_timestamp.getTime())));
const startLastWeek = new Date(latestDate.getTime() - 7 * 24 * 60 * 60 * 1000);

const lastWeekData = data.filter(d => d.start_timestamp > startLastWeek);
const beforeLastWeekData = data.filter(d => d.start_timestamp <= startLastWeek);

const newPlaces = lastWeekData.filter(place => isNewPlace(place, beforeLastWeekData));

const numNewPlaces = newPlaces.length;


```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => visualizeGPSData(filteredData))}
  </div>
</div>

```js

display(numNewPlaces);
display(new_place_data);
console.log(new_place_data);

```

```js
const color = Plot.scale({
  color: {
    type: "categorical",
    domain: d3.groupSort(new_place_data, (D) => -D.length, (d) => d.state).filter((d) => d !== "Other"),
    unknown: "var(--theme-foreground-muted)"
  }
});
```

```js

// Plot.groupY(
//   {y: "count"}, 
//   {x: "date", fill: "date"},
//   new_place_data.map(d => ({date: d.date})));


function newPlaceChart(width,newPlaceData) {
  return Plot.plot({
    title: "Visited places in 2022",
    width,
    height: 300 ,
    y: {grid: true, label: "Places"},
    color: {...color, legend: false},
    marks: [
      Plot.rectY(newPlaceData, Plot.binX({y: "count"}, {x: "date", fill: "state", interval: "Week", tip: true})),
      Plot.ruleY([0])
    ]
  });
}

  

```



<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => visualizeGPSData(newPlaces))}
  </div>
</div>



<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => newPlaceChart(width,new_place_data))}
  </div>
</div>
    


  