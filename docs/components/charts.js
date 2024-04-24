import * as Plot from "npm:@observablehq/plot";
import L from 'npm:leaflet';
import "npm:leaflet.markercluster";
import "npm:leaflet.heat";
import * as d3 from "npm:d3";



export function visualizeGPSData(data,heatMap) {
  let Places = data.map(d => {

    let startDateTime = new Date(d['start_timestamp']);


    let locationParts = d['location_name'].split(', ');
    let address = locationParts[0];
    let city = locationParts[2];
    let region = locationParts[3];
    let postalCode = locationParts[4];
    let country = locationParts[5];


    let popupContent = `<b>Location:</b> ${address}<br>`;
    popupContent += `<b>City:</b> ${city}<br>`;
    popupContent += `<b>Area:</b> ${region}<br>`;
    popupContent += `<b>postalCode:</b> ${postalCode}<br>`;
    popupContent += `<b>country:</b> ${country}<br>`;
    popupContent += `<b>startDateTime:</b> ${startDateTime.toLocaleString()}<br>`;

    return [+d['latitude'], +d['longitude'], popupContent];
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


  Places.forEach(place => {
    var marker = L.marker(new L.LatLng(place[0], place[1]));
    marker.bindPopup(place[2]);
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



export function calculateAverage(new_place_data) {

  new_place_data.forEach(d => {
      d.date = new Date(d.start_timestamp);
  });

  new_place_data.forEach(item => {
    const start = new Date(item.start_timestamp);
    const end = new Date(item.end_timestamp);
    item.duration = (end - start) / 3600000; // 将持续时间存储在数据项中，单位为小时
});


    // 数据处理
    new_place_data.forEach(d => d.date = new Date(d.start_timestamp));
    const dateExtent = d3.extent(new_place_data, d => d.date);
    const startDate = dateExtent[0];
    const endDate = dateExtent[1];
    const months = d3.timeMonth.range(d3.timeMonth.floor(startDate), d3.timeMonth.ceil(endDate));
    const weeks = d3.timeWeek.range(d3.timeWeek.floor(startDate), d3.timeWeek.ceil(endDate));

    const monthGroups = d3.rollups(new_place_data, 
        v => ({ count: v.length, totalDuration: d3.sum(v, d => d.duration) }), 
        d => d3.timeMonth.floor(d.date).toISOString().slice(0, 7));
    const weekGroups = d3.rollups(new_place_data, 
        v => ({ count: v.length, totalDuration: d3.sum(v, d => d.duration) }), 
        d => d3.timeWeek.floor(d.date).toISOString().slice(0, 10));

    const averagePerMonth = monthGroups.reduce((acc, curr) => acc + curr[1].count, 0) / months.length;
    const averagePerWeek = weekGroups.reduce((acc, curr) => acc + curr[1].count, 0) / weeks.length;
    const average_durationPerMonth = monthGroups.reduce((acc, curr) => acc + curr[1].totalDuration, 0) / months.length;
    const average_durationPerWeek = weekGroups.reduce((acc, curr) => acc + curr[1].totalDuration, 0) / weeks.length;

    return {
        averagePerMonth,
        averagePerWeek,
        average_durationPerMonth,
        average_durationPerWeek
    };
}

export function calculateTotalDuration(data) {
  let totalDuration = 0; 

  data.forEach(item => {
      const start = new Date(item.start_timestamp);
      const end = new Date(item.end_timestamp);
      const duration = (end - start) / 3600000; // Hour
      totalDuration += duration; 
  });

  return totalDuration;
}


export function PlaceVisualization(width, PlaceData, yAxisField) {
  var max_value = 400
  if (yAxisField == "visit_counts"){
    PlaceData.forEach(d => {
      d.visit_counts = +d.visit_counts; 
      max_value = d3.max(PlaceData, d => d.visit_counts);
    });
  }else {
    PlaceData.forEach(d => {
      d.total_duration_hours = +d.total_duration_hours; 
      max_value = d3.max(PlaceData, d => d.total_duration_hours);
    });
  }
  

  const color = Plot.scale({
    color: {
      type: "categorical",
      domain: d3.groupSort(PlaceData, (D) => -D.length, (d) => d.location_name).filter((d) => d !== "Other"),
      unknown: "var(--theme-foreground-muted)"
    }
  });

  return Plot.plot({
    title: "Rank",
    width,
    height: 300,
    x: {label: "Index", domain: PlaceData.map(d => d.index)},  // Set domain to include all indices
    y: {grid: true, label: "Visit Counts", domain: [0,max_value]},  // Adjust Y axis to show visit counts
    color: {...color, legend: true},  // Display a legend if it's useful
    marks: [
      Plot.rectY(PlaceData, {
        x: "index",          // Use index for the x-axis
        y: yAxisField,   // Use visit_counts for the y-axis
        fill: "location_name",  
        tip: true            // Enable tooltips
      }),
      Plot.ruleY([0])        // Add a horizontal rule at y = 0
    ]
  });
}

// Function to count travel modes from a JSON object
function countTravelModes(jsonData) {
  const modeCount = {};

  if (jsonData.timelineObjects) {
      jsonData.timelineObjects.forEach(object => {
          if (object.activitySegment && object.activitySegment.waypointPath) {
              const { travelMode } = object.activitySegment.waypointPath;
              if (travelMode) {
                  // Increment count for each travel mode
                  modeCount[travelMode] = (modeCount[travelMode] || 0) + 1;
              }
          }
      });
  }

  // Calculate total count
  const totalCount = Object.values(modeCount).reduce((acc, curr) => acc + curr, 0);

  // Print the counts
  for (const mode in modeCount) {
      const percentage = ((modeCount[mode] / totalCount) * 100).toFixed(2);
      console.log(`${mode}: ${modeCount[mode]} occurrences, ${percentage}% of total occurrences`);
  }
}

// Function to parse JSON and calculate distances
function distanceTravelModes(jsonData) {
    const distances = {};

    if (jsonData.timelineObjects) {
        jsonData.timelineObjects.forEach(object => {
            if (object.activitySegment && object.activitySegment.waypointPath) {
                const { travelMode, distanceMeters } = object.activitySegment.waypointPath;
                if (travelMode && distanceMeters) {
                    // Accumulate distances for each travel mode
                    if (!distances[travelMode]) {
                        distances[travelMode] = 0;
                    }
                    distances[travelMode] += distanceMeters;
                }
            }
        });
    }

    // Calculate total distance
    const totalDistance = Object.values(distances).reduce((acc, curr) => acc + curr, 0);

    // Calculate and print the percentage of each mode
    for (const mode in distances) {
        const percentage = ((distances[mode] / totalDistance) * 100).toFixed(2);
        console.log(`${mode}: ${distances[mode]} meters, ${percentage}% of total distances`);
    }
}