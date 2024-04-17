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
import { visualizeGPSData, filterDataByDateRange, newPlaceChart, getDistance, isNewPlace , newPlace_lastWeek} from "./components/charts.js";


```
```js
const data = await FileAttachment("./data/combined_data.csv").csv();
const new_place_data = await FileAttachment("./data/new_places.csv").csv();

const start = view(Inputs.date({label: "Start", value: "2022-06-21"}));
const end = view(Inputs.date({label: "End", value: "2022-07-21"}));

```


```js
var filteredData = filterDataByDateRange(data, start, end);
var  heatMap = view(Inputs.toggle({label: "Heat Map", value: true}));
const newPlaces = newPlace_lastWeek(data);
const numNewPlaces = newPlaces.length;
```


<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => visualizeGPSData(filteredData, heatMap))}
  </div>
</div>



## Last week 'new place' Visualization



<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => visualizeGPSData(newPlaces, heatMap))}
  </div>
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
    


<div class="grid grid-cols-1">
  <div class="card">
    <h2>New Place visited last week </h2>
    <span class="big">${numNewPlaces.toLocaleString("en-US")}</span>
  </div>
</div>