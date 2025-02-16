import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const Graph = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 800, height = 600;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id(d => d.id))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g').selectAll('line')
      .data(data.links)
      .enter().append('line')
      .style('stroke', d => d.missing ? 'red' : '#999');

    const node = svg.append('g').selectAll('circle')
      .data(data.nodes)
      .enter().append('circle')
      .attr('r', 5)
      .style('fill', d => color(d.group));

    node.append('title').text(d => d.id);

    simulation.on('tick', () => {
      link.attr('x1', d => d.source.x).attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
      node.attr('cx', d => d.x).attr('cy', d => d.y);
    });
  }, [data]);

  return <svg ref={ref} width={800} height={600} style={{}}></svg>;
}

export default Graph;
