

function getLinks() {
         links = []
        links_data = []
  var index = main_data.length;
  main_data.forEach(function(d, i) {
    links_data.push({
      "x": axis_top(d.years)+(max_width*0.025),
      "y": 380,
      index: index,
      fixed: true
    });
    links.push({
      'source': index,
      'target': i
    });
    index++
  });

  main_data.forEach(function(d, i) {
    links_data.push({
      "x": axis_bottom(d.proficiency)+(max_width*0.025),
      "y": max_height + 100,
      index: index,
      fixed: true
    });
    links.push({
      'source': index,
      'target': i
    });
    index++
  });
}
