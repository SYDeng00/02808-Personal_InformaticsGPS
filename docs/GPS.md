---
theme: dashboard
title: GPS Visualization 
toc: false
---


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
import { visualizeGPSData, filterDataByDateRange, newPlaceChart, getDistance, isNewPlace , newPlace_lastWeek, calculateAveragePlacesVisited} from "./components/charts.js";


```
```js
const data = await FileAttachment("./data/combined_data.csv").csv();
const new_place_data = await FileAttachment("./data/new_places.csv").csv();
const duration_data = await FileAttachment("./data/combined_data_durations.csv").csv();

const start = view(Inputs.date({label: "Start", value: "2022-06-21"}));
const end = view(Inputs.date({label: "End", value: "2022-07-21"}));
const Type = view(
  Inputs.select(
    new Map([
      ["Selected Data visualization", "select"],
      ["Last Week visualization", "last"]
    ]),
    {value: "select", label: "Time Period"}
  )
);

```


```js
var data_display = data;
var  heatMap = view(Inputs.toggle({label: "Heat Map", value: true}));
const newPlaces = newPlace_lastWeek(data);
const numNewPlaces = newPlaces.length;
var average_count = calculateAveragePlacesVisited(new_place_data)
if(Type == "select"){
  data_display = filterDataByDateRange(data, start, end);

} else {
   data_display = newPlaces;
}
```



<!-- <div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => visualizeGPSData(data_display, heatMap))}
  </div>

</div> -->



## Last week 'new place' Visualization



<div class="grid grid-cols-1">

</div>

```js
const timePeriod = view(
  Inputs.select(
    new Map([
      ["Year", "year"],
      ["Month", "month"],
      ["Week", "week"],
      ["Day", "day"]
    ]),
    {value: "week", label: "Time Period"}
  )
);
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => newPlaceChart(width,new_place_data,timePeriod))}
  </div>
</div>
    


<div class="grid grid-cols-4">
  <div class="card grid-colspan-2 grid-rowspan-3">
    <div class="card">
      ${resize((width) => visualizeGPSData(data_display, heatMap))}
    </div>
  </div>
  
  <div class="card grid-colspan-2">
      <h2>New places visited last week*</h2>
      <span class="big">${numNewPlaces.toLocaleString("en-US")}</span>
    </div>
    <div class="card grid-colspan-2">
      <h2>Average new places visited per week</h2>
      <span class="big">${average_count.averagePerWeek.toLocaleString("en-US")}</span>
    </div>
    <div class="card grid-colspan-2">
      <h2>Average new places visited per month</h2>
      <span class="big">${average_count.averagePerMonth.toLocaleString("en-US")}</span>
    </div>
  </div>
  </div>
</div>

```js

function parseTimestamp(timestamp) {
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

function timeSpentLast7Days(data) {
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


function averageTimePerWeek(data) {
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

function averageTimePerMonth(data) {
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

function formatDuration(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${days} d, ${hours} h, ${minutes} min`;
}


```

<div class="grid grid-cols-3">
  <div class="card">
    <h2>Time spent in new places last week*</h2>
    <span class="big">${formatDuration(timeSpentLast7Days(duration_data))}</span>
  </div>

  <div class="card">
    <h2>Average time spent in new places per week</h2>
    <span class="big">${formatDuration(averageTimePerWeek(duration_data))}</span>
  </div>

  <div class="card">
    <h2>Average time spent in new places per month</h2>
    <span class="big">${formatDuration(averageTimePerMonth(duration_data))}</span>
  </div>
</div>
<p>* Here, "last week" means last 7 days in the given dataset.</p>

```js


```