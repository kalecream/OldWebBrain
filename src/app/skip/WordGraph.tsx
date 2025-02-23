import { useEffect, useRef } from "react";
import ForceGraph from "force-graph";

export default function WordGraph({ data }) {
    const containerRef = useRef(null);
    const graphInstance = useRef(null);
    const systemPrefersDark = localStorage.getItem("theme") === "dark" ? true : false;
  
    useEffect(() => {
      if (!graphInstance.current && containerRef.current) {
        graphInstance.current = new ForceGraph(containerRef.current)
          .graphData(data)
          .autoPauseRedraw(false)
          .nodeLabel((node) => `${node.id}`)
          .linkColor(() => {
            return systemPrefersDark ? `rgba(255,255,255,0.25)` : `rgba(255,0,0,0.2)`;
          })
          .linkDirectionalParticles(2)
          .linkDirectionalParticleWidth(1)
          .nodeCanvasObject((node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 11 / globalScale;
            ctx.font = `${fontSize}px Fira Code`;
            ctx.fillStyle = `${systemPrefersDark ? `rgba(255,255,255,0.8)` : `rgba(25,0,0,0.8)`}`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(label.toString(), node.x, node.y);
          })
          .onNodeClick(function (node) {
            window.location.href = `/notes/` + node.id.toString();
          });
      } else {
        graphInstance.current.graphData(data);
      }
    }, [data, systemPrefersDark]);
  
    return <div ref={containerRef} style={{ width: "100%", height: "800px", margin: "0 auto", overflow: "hidden" }} />;
  }
  