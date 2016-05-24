var links = [],
    links_data = [];

var gb = 0.05,
    ga = 1;

var inital_data = getData(),
    main_data = inital_data[0],
    main_nodes,
    main_lines,
    main_legend_circles

var color = d3.scale.category20();

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

title.getTitle();

var svg = d3.select('#skill-chart').append('svg')
    .attr("width", "100%")
    .attr("height", "100%")

initChart()

function nodeOut(nodes) {
    nodes
        .transition()
        .duration(750)
        .attr("r", "0")
        .remove()
}

function drillDown(data_out, data_in) {

    main_data = data_in

    force.stop()

    nodeOut(main_nodes.selectAll('circle'))
    nodeOut(main_nodes.selectAll('text'))

    main_legend_circles.remove()

    main_lines.remove()

    links = [];
    links_data = [];
    getLinks()

    main_legend_circles = main.selectAll('circle')
        .data(links_data)
        .enter().append('circle')
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    main_lines = main.selectAll('lines')
        .data(links)
        .enter().append('line')
        .attr('class', 'link')

    main_nodes.remove()

    updateForce();

    main_nodes = main.selectAll('g')
        .data(main_data)
        .enter().append("g")

    main_nodes
        .data(main_data)
        .append('circle')
        .attr("r", 0)
        .style("opacity", "0")
        .transition()
        .duration(2500)
        .attr("r", function (d) {
            return d.proficiency;
        })
        .style("fill", function (d, i) {
            return color(d.text);
        })
        .style("opacity", "0.65")

    main_nodes
        .data(main_data)
        .append('text')
        .text(function (d) {
            return d.text;
        })
        .style("opacity", "0")
        .style("font-size", '0%')
        .transition()
        .duration(2500)
        .style("opacity", "0.65")
        .style("font-size", '100%')

    main_nodes.call(force.drag)
        .on("dblclick", leftClick);
}

function initChart() {

    links = []
    links_data = []
    main_data = inital_data[0]
    margin = {
        top: -maxRadius,
        right: -maxRadius,
        bottom: -maxRadius,
        left: -maxRadius
    }
    max_width = $(window).width()
    max_height = $(window).height()
    width = max_width - margin.left - margin.right
    height = max_height - margin.top - margin.bottom


    try {
        d3.select('.main').remove();
        d3.select('.axis-top').remove();
        d3.select('.axis-bottom').remove();
        force.stop()
    } catch (err) {
        console.log(err)
    }

    main = svg.append('g')
        .attr("class", 'main')
        .attr("transform", "translate(0,-200)");

    getScales()
    getLinks()
    initForce()

    main_legend_circles = main.selectAll('circle')
        .data(links_data)
        .enter().append('circle')
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    main_lines = main.selectAll('.link')
        .data(links)
        .enter().append('line')
        .attr('class', 'link')

    main_nodes = main.selectAll("g")
        .data(inital_data[0])
        .enter().append('g');

    force.start()

    main_nodes
        .append('circle')
        .attr("r", function (d) {
            return d.proficiency;
        })
        .style("fill", function (d, i) {
            return color(d.text);
        })

    main_nodes.append('text')
        .text(function (d) {
            return d.text;
        })

    main_nodes.call(force.drag).on("dblclick", leftClick);
    svg.on("contextmenu", rightClick);

}

function tick(e) {


    main_lines
        .attr('x1', function (d) {
            return d.target.x;
        })
        .attr('y1', function (d) {
            return d.target.y;
        })
        .attr('x2', function (d) {
            return d.source.x;
        })
        .attr('y2', function (d) {
            return d.source.y;
        });

    var q = d3.geom.quadtree(main_data);
    var i = 0;

    while (++i < main_data.length) q.visit(collide(main_data[i], 100));

    main_nodes.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    });

    force.resume();
}

function collide(node, b) {

  var r = node.proficiency + b,
    nx1 = node.x - r,
    nx2 = node.x + r,
    ny1 = node.y - r,
    ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
        y = node.y - quad.point.y,
        l = Math.sqrt(x * x + y * y),
        r = node.proficiency + quad.point.proficiency;
      if (l < r) {
        l = (l - r) / (l * 2);
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };

}

function leftClick() {
    title.updateTitle(this);
    drillDown(this.__data__, this.__data__.children);
}

function rightClick() {
    d3.event.preventDefault();
    title.setIntial();
    drillDown({}, inital_data[0])
}
