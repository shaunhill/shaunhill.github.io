function initForce() {
    force = d3.layout.force()
        .gravity(0)
        .charge(0.1)
        .friction(0.9)
        .nodes(main_data.concat(links_data))
        .size([width, height])
        .on('tick', tick)
        .links(links)
        .linkDistance(0).linkStrength(0.50)

}

function updateForce() {
    force
        .nodes(main_data.concat(links_data))
        .links(links)
        .start()
}
