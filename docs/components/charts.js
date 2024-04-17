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
  var map = L.map(div).setView([xCenter, yCenter], 6);

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
    title: "New places visited in 2022 (Jan-Aug)",
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

export function newPlace_lastWeek(data){
  data.forEach(d => d.start_timestamp = new Date(d.start_timestamp)); 

  const latestDate = new Date(Math.max(...data.map(d => d.start_timestamp.getTime())));
  const startLastWeek = new Date(latestDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  const lastWeekData = data.filter(d => d.start_timestamp > startLastWeek);
  const beforeLastWeekData = data.filter(d => d.start_timestamp <= startLastWeek);

  const newPlaces = lastWeekData.filter(place => isNewPlace(place, beforeLastWeekData));
  return newPlaces

}



export function calculateAveragePlacesVisited(new_place_data) {

  new_place_data.forEach(d => {
      d.date = new Date(d.start_timestamp);
  });


  const dateExtent = d3.extent(new_place_data, d => d.date);
  const startDate = dateExtent[0];
  const endDate = dateExtent[1];


  const months = d3.timeMonth.range(d3.timeMonth.floor(startDate), d3.timeMonth.ceil(endDate));
  const weeks = d3.timeWeek.range(d3.timeWeek.floor(startDate), d3.timeWeek.ceil(endDate));


  const monthGroups = d3.rollups(new_place_data, v => v.length, d => d3.timeMonth.floor(d.date).toISOString().slice(0, 7));
  const weekGroups = d3.rollups(new_place_data, v => v.length, d => d3.timeWeek.floor(d.date).toISOString().slice(0, 10));


  const totalVisitsPerMonth = monthGroups.reduce((acc, curr) => acc + curr[1], 0);
  const totalVisitsPerWeek = weekGroups.reduce((acc, curr) => acc + curr[1], 0);


  const averagePerMonth = totalVisitsPerMonth / months.length;
  const averagePerWeek = totalVisitsPerWeek / weeks.length;

  return {
      averagePerMonth,
      averagePerWeek
  };
}

export function parseTimestamp(timestamp) {
  const [date, time] = timestamp.split('T');
  const [year, month, day] = date.split('-').map(Number);
  const [hour, minute, second] = time.slice(0, 8).split(':').map(Number);
  return new Date(year, month - 1, day, hour, minute, second);
}

function isLastWeek(date) { // unused, because we don't care about actual last week
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  return date >= oneWeekAgo;
}

function timeSpentLastWeek(data) {  // unused, because we don't care about actual last week
  let totalDuration = 0;
  data.forEach(row => {
      const startDate = parseTimestamp(row['Start Timestamp']);
      if (isLastWeek(startDate)) {
          totalDuration += parseFloat(row['Duration (seconds)']);
      }
  });
  return totalDuration;
}

export function timeSpentLast7Days(data) {
  if (!data || data.length === 0) return 0;

  // Parse all start dates and find the latest
  const dates = data.map(row => parseTimestamp(row['Start Timestamp']));
  const latestDate = new Date(Math.max(...dates));

  // Define the start of the 7-day window
  const sevenDaysAgo = new Date(latestDate);
  sevenDaysAgo.setDate(latestDate.getDate() - 7);

  let totalDuration = 0;

  // Sum durations for all entries within the last 7 days of the latest date found
  data.forEach(row => {
      const startDate = parseTimestamp(row['Start Timestamp']);
      if (startDate >= sevenDaysAgo && startDate <= latestDate) {
          totalDuration += parseFloat(row['Duration (seconds)']);
      }
  });

  return totalDuration;
}


export function averageTimePerWeek(data) {
  const durations = [];
  const earliestDate = parseTimestamp(data[0]['Start Timestamp']);
  let latestDate = earliestDate;

  data.forEach(row => {
      const startDate = parseTimestamp(row['Start Timestamp']);
      durations.push(parseFloat(row['Duration (seconds)']));
      if (startDate > latestDate) {
          latestDate = startDate;
      }
  });

  const totalWeeks = Math.ceil((latestDate - earliestDate) / (7 * 24 * 3600 * 1000));
  const totalDuration = durations.reduce((acc, duration) => acc + duration, 0);
  return totalDuration / totalWeeks;
}

export function averageTimePerMonth(data) {
  const durations = [];
  const earliestDate = parseTimestamp(data[0]['Start Timestamp']);
  let latestDate = earliestDate;

  data.forEach(row => {
      const startDate = parseTimestamp(row['Start Timestamp']);
      durations.push(parseFloat(row['Duration (seconds)']));
      if (startDate > latestDate) {
          latestDate = startDate;
      }
  });

  const totalMonths = Math.ceil((latestDate - earliestDate) / (30 * 24 * 3600 * 1000));
  const totalDuration = durations.reduce((acc, duration) => acc + duration, 0);
  return totalDuration / totalMonths;
}

export function formatDuration(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${days} d, ${hours} h, ${minutes} min`;
}