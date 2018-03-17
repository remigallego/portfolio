import React, { Component } from 'react';
import * as d3 from 'd3'
import axios from 'axios'

export default class CatchPhrase extends Component {
constructor(props) {
  super(props)
  this.state = {
    dataset: {}
  }
  this.buildBarGraph = this.buildBarGraph.bind(this)
  this.buildPieGraph = this.buildPieGraph.bind(this)
  this.buildLineGraph = this.buildLineGraph.bind(this)
}
  componentWillMount() {
  }

  componentDidMount() {
    axios.get('https://codestats.net/api/users/Remifasol').then((res) => {
      let response = res.data
      this.setState({dataset: response})

    }).then(() => {
    this.buildBarGraph()
    this.buildPieGraph()
    this.props.isLoaded(true)
    })
    .catch((err) => {
      console.log('ERROR: ' + err)
    })
  }

buildLineGraph() {

}
// PIE GRAPH
buildPieGraph() {
  const jsonObj = this.state.dataset.languages
  const total = this.state.dataset.total_xp

  let dataset = []
  let wanted = ['Sass', 'JSX (React)', 'JavaScript', 'HTML', 'CSS']
  for (var i in jsonObj) {
    let language = i;
    if (language === 'JavaScript (JSX)')
      language = 'JSX (React)'

    if (wanted.indexOf(language) >= 0)
      dataset.push([
        language, jsonObj[i].xps
      ])
  }

  let calcPercentage = function(d) {
    let value = d.value
    let result = (value * 100) / total
    return Math.ceil(result)
  }

  let tooltipPie = d3.select('body').append("div").attr("class", 'tooltip-pie').style("opacity", "0").style("position", "absolute").style("display", "none").text("tooltip");

  let margin = {
    top: 70,
    right: 20,
    bottom: 30,
    left: 70
  }
  let widthFull = 500
  let heightFull = 300

  let width = widthFull - margin.left - margin.right
  let height = heightFull - margin.top - margin.bottom
  let radius = Math.min(width, height) / 1.2;

  dataset.forEach(function(d) {
    d.data = d[0];
    d.value = + d[1];
  });

  var color = d3.scaleOrdinal().range([
    "rgba(138,245,205,0.7)",
    "rgba(38,45,205,0.7)",
    "rgba(238,255,145,0.7)",
    "rgba(100, 251, 251, 0.7)",
    "rgba(251, 131, 251, 0.7)",
    "rgba(201, 191, 151, 0.7)"
  ]);

  var arc = d3.arc().outerRadius(radius - 90).innerRadius(radius - 60);


  var pie = d3.pie().sort(null).value(function(d) {
    return d[1];
  });

  let svg = d3.select(".pie-chart").append("svg").attr("width", 500).attr("height", 300).attr("viewBox", "0 0 " + width + " " + height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

  var g = svg.selectAll(".arc").data(pie(dataset)).enter().append("g").attr("class", "arc").on('mouseover', (d) => {
    tooltipPie.style("opacity", "1")

    tooltipPie.html(calcPercentage(d) + "%").style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 45) + "px").style("display", "block")
  }).on("mousemove", (d) => {
    tooltipPie.style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 45) + "px")
  }).on("mouseout", (d) => {
    tooltipPie.style("display", "none")
  })

  g.append("path").attr("d", arc).style("fill", function(d) {
    return color(d.data);
  })

  var legendRectSize = 18;
  var legendSpacing = 4;

  var legend = svg.selectAll('.legend').data(color.domain()).enter().append('g').attr('class', 'legend').attr('transform', function(d, i) {
    var height = legendRectSize + legendSpacing;
    var offset = height * color.domain().length / 2;
    var horz = -2 * legendRectSize;
    var vert = i * height - offset;
    return 'translate(' + horz + ',' + vert + ')';
  });
  legend.append('rect').attr('width', legendRectSize).attr('height', legendRectSize).style('fill', color).style('stroke', color)

  legend.append('text').attr('x', legendRectSize + legendSpacing).attr('y', legendRectSize - legendSpacing).text(function(d) {
    return d.data;
  }).style("font-size", "13px")

  }


// BAR GRAPH
buildBarGraph() {
  const jsonObj = this.state.dataset.dates
  let dataset = []
  let count = 0;
  for(var i in jsonObj)
  {
    if(count > 10)
      break
    count++
    dataset.push([i, jsonObj[i]])
  }

  let margin = {top: 70, right: 40, bottom: 30, left: 40}
  let widthFull = 400
  let heightFull = 300

  let width  = widthFull - margin.left - margin.right
  let height = heightFull - margin.top - margin.bottom

  let parseTime = d3.timeParse("%Y-%m-%d")

  let x = d3.scaleBand().rangeRound([width, 0], .05).padding(0);
  let y = d3.scaleLinear().range([height, 0]);

  let svg = d3.select(".bar-chart")
            .append("svg")
            .attr("width",500).attr("height",300)
            .attr("viewBox", "0 0 " + widthFull + " " + heightFull)
            .append("g")
            .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")");
  dataset.forEach(function(d) {
    d.date = parseTime(d[0]);
    d.close = +d[1];
  });


  x.domain(dataset.map(function(d) { return d.date}))
  y.domain([0, d3.max(dataset, function(d) { return d.close; })]);

  let tooltip = d3.select('body')
            .append("div")
            .attr("class",'tooltip-bar')
            .style("opacity","0")
            .style("position","absolute")
            .style("display","none")
            .text("tooltip");

  svg.selectAll(".bar")
    .data(dataset)
    .enter().append("rect")
    .attr("class","bar")
    .style("fill","rgba(138,245,205,1)")
    .attr("x",function(d) {return x(d.date)})
    .attr("width", x.bandwidth())
    .attr("y",function(d) {return y(d.close)})
    .attr("height",function(d) {return height - y(d.close)})
    .on("mouseover", function(d) {

    tooltip.transition()
      .duration(200)
      .style("opacity","0.8");

    let day = ("0" + d.date.getDate()).slice(-2)
    let month = ("0" + (d.date.getMonth() + 1)).slice(-2)
    let year = d.date.getFullYear();
    let date = day + "/" + month + "/" + year;

    tooltip.html(date + " <br><b>" + d.close + "</b> characters typed!")
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 45) + "px")
      .style("display","block")

    })
    .on("mousemove", (d) => {
      tooltip
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 45) + "px");
    })
    .on("mouseout",(d)=>{
    tooltip.transition().duration(200).style("opacity","0")
    })

// Add the X Axis
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%d/%m")).ticks(d3.timeDay.every(1)));
svg.append("text")
    .attr("transform", "rotate(0)")
    .attr("y", 0 - margin.left/2-10)
    .attr("x",0 + width/2)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-family","Montserrat")
    .style("font-size","13px")
    .html("Characters of code written per day in <a>Atom</a>");

// Add the Y Axis
svg.append("g")
    .call(d3.axisLeft(y).ticks(5));
}
  render() {
    return(
    <div>
      <div className="blockchart-container">
        <div className="container">
          <div className="row" >
            <div className="bar-chart mx-auto col-sm-6 "></div>
            <div className="pie-chart mx-auto col-sm-6 "></div>
          </div>
          <div className="row" >
            <div className="morestats mx-auto">More stats on <a href="https://codestats.net/users/Remifasol" className="link">Code:Stats</a></div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
