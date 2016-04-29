function getLegend() {

  var legend_data = getLegendData();

  var svg = d3.select('svg').append('g')
    .attr("class", 'skill-legend');

var  nodes = svg.selectAll('g')
    .data(legend_data)
    .enter().append('g')
    .attr("transform", function(d, i) {
        r = d.radius
      return "translate(" + (0 ) + "," + (r*6-160) + ")";
    })
    .attr('class', 'node')

  nodes.append('circle')
    .attr('r', function(d) {
      return d.radius
    })
    .attr("opacity", function(d, i) {
      return 0.65
    });

  nodes.append('text')
    .text(function(d) {
      return d.text
    })
};
