/**
 * Created by jiangyu2016 on 2017/2/4.
 */

import * as d3 from 'd3'

const svg = d3.select('body').append('svg')

svg.attr('width', 500).attr('height', 500).selectAll('rect')
    .data([4, 1, 2, 3]).enter()
    .append('rect').attr('width', w => 30).attr('height', w => 30 * w).attr('x', (d, i) => i * 50).attr('y', d => 500 - d * 30)

console.log(d3)

const scale = d3.scaleLinear().domain([1, 10]).range([10, 450])

const xAxis = d3.axisBottom()
xAxis.scale(scale)

svg.call(xAxis)

d3.selectAll('rect').on('click', (a, index, list) => {
    d3.select(list[index])
        .transition()
        .attr('height', 100).attr('y', d => d * 50)
})
