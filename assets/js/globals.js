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

max_width = $(window).width()
max_height = $(window).height()
width = max_width - margin.left - margin.right,
height = max_height - margin.top - margin.bottom;

