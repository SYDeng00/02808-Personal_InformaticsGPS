import * as Plot from "npm:@observablehq/plot";
import {extent, format, rollup, timeFormat} from "npm:d3";

export function newPlaceChart(width, height, newPlaceData) {
    const data = newPlaceData.map(d => ({
      date: new Date(d.date), // Assuming date is in string format, convert it to Date object
      value: +d.value // Convert value to number
    }));
  
    return Plot.plot({
      width,
      marginTop: 0,
      height: height - 50,
      color: {legend: true, range: ["#B6B5B1", "#848890"]},
      grid: true,
      x: {type: "time", domain: extent(data, d => d.date), tickSize: 0, tickPadding: 3},
      y: {label: "place", labelOffset: 0, tickSize: 0, tickSpacing: 20},
      marks: [
        Plot.areaY(data, {
          x: "date",
          y: d => d.value , // Assuming value is in GWh, convert to thousands
          fill: "name",
          tip: true
        }),
        Plot.ruleY([0], {strokeOpacity: 0.3})
      ]
    });
  }
  
