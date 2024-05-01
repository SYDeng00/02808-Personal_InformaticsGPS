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
import { visualizeGPSData, filterDataByDateRange, newPlaceChart, getDistance, isNewPlace , newPlace_lastWeek, calculateAverage, calculateTotalDuration, PlaceVisualization} from "./components/charts.js";

```

# WorldViewer

```js
const data = await FileAttachment("./data/combined_data.csv").csv();
const new_place_data = await FileAttachment("./data/new_places.csv").csv();
const  frequency_data = await FileAttachment("./data/processed_locations.csv").csv();
const  duration_data = await FileAttachment("./data/processed_duration.csv").csv();

const start = view(Inputs.date({label: "Start", value: "2022-06-21"}));
const end = view(Inputs.date({label: "End", value: "2022-07-21"}));
const Type = view(
  Inputs.select(
    new Map([
      ["Between selected dates", "select"],
      ["Last 7 days", "last"],
      ["Top 10 places", "frequency"],
      ["Top 10 time spent", "duration"]
    ]),
    {value: "select", label: "Visualization"}
  )
);

```

```js
var data_display = data;
var  heatMap = view(Inputs.toggle({label: "Heat Map", value: true}));
const newPlaces_LW = newPlace_lastWeek(data);
const numnewPlaces_LW = newPlaces_LW.length;
var average_count = calculateAverage(new_place_data);
var average_duration_LW = calculateTotalDuration(newPlaces_LW);
var data_type
var shouldDisplay
if(Type == "select"){
  data_display = filterDataByDateRange(data, start, end);

}else if (Type == "frequency") {
  data_display = frequency_data;
  var data_type = "visit_counts"
  shouldDisplay = true;
  
}
else if(Type == "last"){
   data_display = newPlaces_LW;
} else{
  data_display = duration_data;
  var data_type = "total_duration_hours"
  shouldDisplay = true;
}
```


<div class="grid grid-cols-3">
  <div class="card grid-colspan-2 grid-rowspan-3">
      ${resize((width) => visualizeGPSData(data_display, heatMap))}
  </div>

  <div class="card" style="display: flex; justify-content: space-between; align-items: center;">
    <div style="flex: 1; text-align: center;">
      <h2>New places for last 7 days</h2>
      <span class="big">${numnewPlaces_LW.toLocaleString("en-US")}</span>
    </div>
    <div style="border-left: 1px solid #ccc; height: 100%; margin: 0 20px;"></div> 
    <div style="flex: 1; text-align: center;">
      <h2>Average new places per week</h2>
      <span class="big">${average_count.averagePerWeek.toFixed(1).toLocaleString("en-US")}</span>
    </div>
  </div>
  <div class="card" style="display: flex; justify-content: space-between; align-items: center;">
    <div style="flex: 1; text-align: center;">
      <h2>Average new places per month</h2>
      <span class="big">${average_count.averagePerMonth.toFixed(1).toLocaleString("en-US")}</span>
    </div>
    <div style="border-left: 1px solid #ccc; height: 100%; margin: 0 20px;"></div> 
    <div style="flex: 1; text-align: center;">
      <h2>Time spent in new places last 7 days</h2>
      <span class="big">${average_duration_LW.toFixed(1).toLocaleString("en-US")} h</span>
      </div>


  </div>
  <div class="card" style="display: flex; justify-content: space-between; align-items: center;">
    <div style="flex: 1; text-align: center;">
      <h2>Average time spent in new places per week</h2>
      <span class="big">${average_count.average_durationPerWeek.toFixed(1).toLocaleString("en-US")} h</span>
    </div>
    <div style="border-left: 1px solid #ccc; height: 100%; margin: 0 20px;"></div> 
    <div style="flex: 1; text-align: center;">
      <h2>Average time spent in new places per month</h2>
      <span class="big">${average_count.average_durationPerMonth.toFixed(1).toLocaleString("en-US")} h</span>
    </div>
  </div>

</div>


<div class="grid grid-cols-1">
  ${shouldDisplay ? html`<div class="card">${resize((width) => PlaceVisualization(width,data_display,data_type))}</div>` : ''}
</div>

```js
const timePeriod = view(
  Inputs.select(
    new Map([
      ["Month", "month"],
      ["Week", "week"],
      ["Day", "day"]
    ]),
    {value: "week", label: "Time Period"}
  )
);


```

# New Place Trend

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => newPlaceChart(width,new_place_data,timePeriod))}
  </div>
</div>
