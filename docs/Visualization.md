# Visualization



```js
import * as d3 from "npm:d3";

const data = [10, 15, 20, 25, 30]; // 示例数据
const svg = select("svg"); // 选择上面创建的 SVG 容器
const width = +svg.attr("width");
const height = +svg.attr("height");
const barWidth = width / data.length; // 计算柱状的宽度

// 创建y轴的比例尺
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([height, 0]);

// 绘制柱状图
d3.selectAll("rect")
  .data(data)
  .enter().append("rect")
    .attr("x", (d, i) => i * barWidth)
    .attr("y", d => yScale(d))
    .attr("width", barWidth - 1)
    .attr("height", d => height - yScale(d))
    .attr("fill", "steelblue")
    .on("click", (event, d) => {
      console.log(`Clicked on bar with value ${d}`);
      // 这里可以添加更多点击后的动作，比如更新详情面板、改变颜色等
      select(event.target).attr("fill", "tomato"); // 点击后改变颜色
    });

```

<svg width="400" height="300" style="border: 1px solid #ccc;"></svg>