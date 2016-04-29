

function getLinks() {
  var index = main_data.length;
  main_data.forEach(function(d, i) {
    links_data.push({
      "x": axis_top(d.years) + 250,
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
      "x": axis_bottom(d.proficiency) + 250,
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
