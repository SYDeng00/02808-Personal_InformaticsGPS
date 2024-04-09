---
theme: dashboard
title: Weather report
toc: false
---

# Weather report
```js
const forecast = FileAttachment("./data/forecast.json").json();
```

```js
display(forecast);
```

```js
display(
  Plot.plot({
    title: "Hourly temperature forecast",
    x: {type: "utc", ticks: "day", label: null},
    y: {grid: true, inset: 10, label: "Degrees (F)"},
    marks: [
      Plot.lineY(forecast.properties.periods, {
        x: "startTime",
        y: "temperature",
        z: null, // varying color, not series
        stroke: "temperature",
        curve: "step-after"
      })
    ]
  })
);
```


```js
function temperaturePlot(data, {width} = {}) {
  return Plot.plot({
    title: "Hourly temperature forecast",
    width,
    x: {type: "utc", ticks: "day", label: null},
    y: {grid: true, inset: 10, label: "Degrees (F)"},
    marks: [
      Plot.lineY(data.properties.periods, {
        x: "startTime",
        y: "temperature",
        z: null, // varying color, not series
        stroke: "temperature",
        curve: "step-after"
      })
    ]
  });
}
```

<!-- ```js
display(temperaturePlot(forecast, {width: 300}));
``` -->

<div class="grid grid-cols-2">
  <div class="card grid-colspan-2">one–two</div>
  <div class="card">three</div>
  <div class="card">four</div>
</div>

<div class="grid grid-cols-1">
  <div class="card">${resize((width) => temperaturePlot(forecast, {width}))}</div>
</div>





```js
import L from 'npm:leaflet';
var addressPoints = [
  [-37.8210922667, 175.2209316333, "2"],
  [-37.8210819833, 175.2213903167, "3"],
  [-37.8210881833, 175.2215004833, "3A"],
  [-37.8211946833, 175.2213655333, "1"],
  [-37.8209458667, 175.2214051333, "5"],
  [-37.8208292333, 175.2214374833, "7"],
  [-37.8325816, 175.2238798667, "537"],
  [-37.8315855167, 175.2279767, "454"],
  [-37.8096336833, 175.2223743833, "176"],
  [-37.80970685, 175.2221815833, "178"],
  [-37.8102146667, 175.2211562833, "190"],
  [-37.8088037167, 175.2242227, "156"],
  [-37.8112330167, 175.2193425667, "210"],
  [-37.8116368667, 175.2193005167, "212"],
  [-37.80812645, 175.2255449333, "146"],
  [-37.8080231333, 175.2286383167, "125"],
  [-37.8089538667, 175.2222222333, "174"],
  [-37.8080905833, 175.2275400667, "129"]
]

var map = L.map('map').setView([-37.82, 175.23], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  detectRetina: true
}).addTo(map);

var markers = L.markerClusterGroup();

for (var i = 0; i < addressPoints.length; i++) {
  var a = addressPoints[i];
  var title = a[2];
  var marker = L.marker(new L.LatLng(a[0], a[1]), {
    title: title
  });
  marker.bindPopup(title);
  markers.addLayer(marker);
}

map.addLayer(markers);

```