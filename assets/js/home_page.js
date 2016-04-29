
var k = 1, // initial number of candidates to consider per circle
  m = 1, // initial number of circles to add per frame
  n = 700, // remaining number of circles to add
  newCircle = bestCircleGenerator(maxRadius, padding);

var svg = d3.select("section").append("svg")
  .attr("width", "100%")
  .attr("height", "100%")
  .append("g")

d3.timer(function() {
  for (var i = 0; i < m && --n >= 0; ++i) {
    var circle = newCircle(k);
    svg.append("circle")
      .attr("cx", circle[0])
      .attr("cy", circle[1])
      .attr("r", 0)
      .style("fill-opacity", (Math.random() + .5) / 2)
      .transition()
      .attr("r", circle[2]);

    // As we add more circles, generate more candidates per circle.
    // Since this takes more effort, gradually reduce circles per frame.
    if (k < 500) k *= 1.10, m *= .75;
  }
  return !n;
});

function bestCircleGenerator(maxRadius, padding) {
  var quadtree = d3.geom.quadtree().extent([
      [0, 0],
      [width, height]
    ])([]),
    searchRadius = maxRadius * 2,
    maxRadius2 = maxRadius * maxRadius;

  return function(k) {
    var bestX, bestY, bestDistance = 0;

    for (var i = 0; i < k || bestDistance < padding; ++i) {
      var x = Math.random() * width,
        y = Math.random() * height,
        rx1 = x - searchRadius,
        rx2 = x + searchRadius,
        ry1 = y - searchRadius,
        ry2 = y + searchRadius,
        minDistance = maxRadius; // minimum distance for this candidate

      quadtree.visit(function(quad, x1, y1, x2, y2) {
        if (p = quad.point) {
          var p,
            dx = x - p[0],
            dy = y - p[1],
            d2 = dx * dx + dy * dy,
            r2 = p[2] * p[2];
          if (d2 < r2) return minDistance = 0, true; // within a circle
          var d = Math.sqrt(d2) - p[2];
          if (d < minDistance) minDistance = d;
        }
        return !minDistance || x1 > rx2 || x2 < rx1 || y1 > ry2 || y2 < ry1; // or outside search radius
      });

      if (minDistance > bestDistance) bestX = x, bestY = y, bestDistance = minDistance;
    }

    var best = [bestX, bestY, bestDistance - padding];
    quadtree.add(best);
    return best;
  };
}
