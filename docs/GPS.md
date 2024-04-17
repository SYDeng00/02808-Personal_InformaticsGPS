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
import { visualizeGPSData, filterDataByDateRange, newPlaceChart, getDistance, isNewPlace , newPlace_lastWeek, calculateAveragePlacesVisited, parseTimestamp, timeSpentLast7Days, averageTimePerWeek, averageTimePerMonth, formatDuration} from "./components/charts.js";


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
      ${resize((width) => visualizeGPSData(data_display, heatMap))}
  </div>

  <div class="card grid-colspan-6">
      <h2>New places visited last week*</h2>
      <span class="big">${numNewPlaces.toLocaleString("en-US")}</span>
    </div>
  <div class="card grid-colspan-6">
    <h2>Average new places visited per week</h2>
    <span class="big">${average_count.averagePerWeek.toLocaleString("en-US")}</span>
    </div>
    <div class="card grid-colspan-6">
      <h2>Average new places visited per month</h2>
      <span class="big">${average_count.averagePerMonth.toLocaleString("en-US")}</span>
    </div>
    <div class="card grid-colspan-6">
    <h2>Time spent in new places last week*</h2>
    <span class="big">${formatDuration(timeSpentLast7Days(duration_data))}</span>
    </div>
    <div class="card grid-colspan-6">
      <h2>Average time spent in new places per week</h2>
      <span class="big">${formatDuration(averageTimePerWeek(duration_data))}</span>
    </div>
    <div class="card grid-colspan-6">
      <h2>Average time spent in new places per month</h2>
      <span class="big">${formatDuration(averageTimePerMonth(duration_data))}</span>
  </div>
</div>
<p>* Here, "last week" means last 7 days in the given dataset.</p>

```js


```