/**
 * Created by jiangyukun on 2017/2/6.
 */
import * as d3 from 'd3'

console.log(d3)

const pie = d3.pie()

const data = [1, 2, 3, 7]
const w = 300, h = 300
const outerRadius = w / 2

const arc = d3.arc().outerRadius(outerRadius).innerRadius(0)

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)
const arcs = svg.selectAll('g.arc').data(pie(data)).enter()
    .append('g').attr('class', 'arc').attr('transform', `translate(${outerRadius},${outerRadius})`)

arcs.append('path').attr('fill', (d, i) => {
    return '#0000ff'
}).attr('d', arc)

