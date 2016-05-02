var rmax = 150,
    rmin = 50,
    maxRadius = 200, // maximum radius of circle
    padding = 0.5, // padding between circles; also minimum radius
    margin = {
        top: -maxRadius,
        right: -maxRadius,
        bottom: -maxRadius,
        left: -maxRadius
    },
    max_width = $(window).width(),
    max_height = $(window).height(),
    width = max_width - margin.left - margin.right,
    height = max_height - margin.top - margin.bottom;

debugger;
var aspect = width / height,
    chart = d3.select('#home-chart');

d3.select(window)
    .on("resize", function () {
        var targetWidth = chart.node().getBoundingClientRect().width;
        chart.attr("width", targetWidth);
        chart.attr("height", targetWidth / aspect);
    });
chart = d3.select('#skill-chart');
d3.select(window)
    .on("resize", function () {
        var targetWidth = chart.node().getBoundingClientRect().width;
        chart.attr("width", targetWidth);
        chart.attr("height", targetWidth / aspect);
    });
