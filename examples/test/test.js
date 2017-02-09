/**
 * Created by jiangyukun on 2017/2/8.
 */
import * as d3 from 'd3'

const svg = d3.select('body').append('svg').attr('width', 500).attr('height', 500)

console.log(d3)


d3.json('../../res/city_tree.json', (result) => {

  const h = d3.hierarchy(result)

  const h1 = h.sum(d => 1)

  // console.log(h)

  const nodes = d3.partition().size([500, 500])

  const data = nodes(h1).descendants()

  console.log(data)

  const rects = svg.selectAll('g').data(data).enter().append('g')
  rects.append('rect')
    .attr('x', d => d.x0).attr('width', d => d.x1 - d.x0)
    .attr('y', d => d.y0).attr('height', d => d.y1 - d.y0)
})
