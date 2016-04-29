var axis_bottom = '';
var axis_top = '';

function getScales() {

    axis_bottom = d3.scale.linear()
        .domain([0, 100])
        .range([max_width*0.015, max_width*0.925]);

    axis_top = d3.scale.linear()
        .domain([0, 8])
        .range([max_width*0.015, max_width*0.925]);


    var axis_t = svg.append("g")
        .attr("transform", "translate(" + axis_top(0) + ",180)")
        .attr("class", "axis-top axis")
        .call(d3.svg.axis()
            .scale(axis_top)
            .orient("bottom")
            .ticks(10, "s"));

    axis_t.append('text').text('Years Experince').attr('x','48.5%').attr('y','-1%')

    var axis_b = svg.append("g")
        .attr("transform", "translate(" + axis_bottom(0) + "," + (max_height - 100) + ")")
        .attr("class", "axis-bottom axis")
        .call(d3.svg.axis()
            .scale(axis_bottom)
            .orient("top")
            .ticks(20, "s"));

    axis_b.append('text').text('Proficiency').attr('x','48.5%').attr('y','2%')


};
