import { useEffect, useRef } from "react";
import ForceGraph from "force-graph";

export const Graph = ({ data }) => {
  const containerRef = useRef(null);
  const graphInstance = useRef(null);

  useEffect(() => {
    if (!graphInstance.current && containerRef.current) {
      graphInstance.current = new ForceGraph(containerRef.current)
        .graphData(data)
        .nodeAutoColorBy("group")
        .nodeRelSize(1.6)
        .nodeLabel((node) => `${node.id}`)
        .linkColor(() => "rgba(255,255,255,0.25)")
        .linkDirectionalParticles(4)
        .linkDirectionalParticleWidth(1)
        .onNodeClick(function (node) {
          window.location.href = `/notes/` + node.id.toString();
        });
    } else {
      graphInstance.current.graphData(data);
    }
  }, [data]);

  return <div ref={containerRef} style={{ width: "800px", height: "800px" }} />;
};

export default Graph;
