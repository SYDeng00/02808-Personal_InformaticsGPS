import * as Plot from "npm:@observablehq/plot";
import L from 'npm:leaflet';
import "npm:leaflet.markercluster";
import "npm:leaflet.heat";
import * as d3 from "npm:d3";



export function visualizeGPSData(data,heatMap) {
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
  document.body.appendChild(div);

  // Initialize the map
  var map = L.map(div).setView([xCenter, yCenter], 10);

  // Add OSM tile layer to the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true
  }).addTo(map);

  // // Add a heat layer to the map
  if (heatMap) {
    let heat = L.heatLayer(Places, { 
                radius: 25,  
                blur:30,
                maxZoom: 14,
                max: 0.5  
              }).addTo(map);

  }

    

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

export function filterDataByDateRange(data, startDate, endDate) {
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

export function newPlaceChart(width,newPlaceData,timePeriod) {
  const color = Plot.scale({
    color: {
      type: "categorical",
      domain: d3.groupSort(newPlaceData, (D) => -D.length, (d) => d.state).filter((d) => d !== "Other"),
      unknown: "var(--theme-foreground-muted)"
    }
  });

  return Plot.plot({
    title: "New Places Visited  in 2022",
    width,
    height: 300 ,
    y: {grid: true, label: "Places"},
    color: {...color, legend: false},
    marks: [
      Plot.rectY(newPlaceData, Plot.binX({y: "count"}, {x: "date", fill: "state", interval: timePeriod, tip: true})),
      Plot.ruleY([0])
    ]
  });
}

export function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; 
  const φ1 = lat1 * Math.PI / 180; 
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; 
}


export function isNewPlace(place, existingPlaces, threshold=50) {
  return !existingPlaces.some(existingPlace => {
      const distance = getDistance(
          place.latitude, place.longitude,
          existingPlace.latitude, existingPlace.longitude
      );
      return distance <= threshold;
  });
}