"use client";
import { useEffect, useRef, useState } from "react";
import { ResponsiveContainer } from "recharts";
import * as d3 from "d3";
import { fetchTimeLog } from "@utils/togglApi";

// https://engineering.toggl.com/docs/api/time_entries/#parameters
interface TimeLog {
  description: string;
  start: string;
  project_id: number | string;
  duration: number;
}

const projectID: Record<string, string> = {
  "176878046": "Organisation",
  "196581248": "Occupational",
  "190040032": "Social",
  "198974982": "Personal",
  "196579838": "Spiritual", // LANDS
  "190040024": "Physical",
  "178607855": "Cleaning", // Cleaning
};

const projectColors: { [key: string]: string } = {
  "176878046": "#8884d8",
  "196581248": "#82ca9d",
  "190040032": "Social",
  "198974982": "Personal",
  "196579838": "Spiritual", // LANDS
  "190040024": "Physical",
  "178607855": "#8884d8", // Cleaning
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toDateString();
};

export const StackedTimeLog: React.FC = () => {
  const [graphData, setGraphData] = useState<any[]>([]);
  const [currentTask, setCurrentTask] = useState<TimeLog | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries: TimeLog[] = await fetchTimeLog();

        if (entries.length > 0) {
          const latestTask = entries[0];
          setCurrentTask(latestTask);
        }

        setGraphData(entries);
      } catch (error) {
        console.error("Error fetching time log data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (graphData.length > 0) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();

      const width = 800;
      const height = 400;
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };

      const WeeklyEntries = graphData.filter(
        (entry) => new Date(entry.start).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000 && entry.duration > 0,
      );

      const data = d3.group(
        WeeklyEntries,
        (d) => formatDate(d.start),
        (d) => projectID[d.project_id],
      );

      const dates = Array.from(data.keys());
      const xScale = d3
        .scaleBand()
        .domain(dates)
        .range([margin.left, width - margin.right])
        .padding(0.1);

      const maxDuration = d3.max(WeeklyEntries, (d) => d.duration / 3600) || 0;
      const yScale = d3
        .scaleLinear()
        .domain([0, maxDuration])
        .nice()
        .range([height - margin.bottom, margin.top]);

      svg.attr("viewBox", `0 0 ${width} ${height}`).style("background", "transparent");

      const reddishColors = [
        "#ff4d4d", // Bright red
        "#ff6666", // Lighter red
        "#ff8080", // Even lighter red
        "#ff9999", // Soft pinkish red
        "#e60000", // Deep red
        "#cc0000", // Darker red
        "#b30000", // Burgundy red
        "#990000", // Dark burgundy
        "#800000", // Maroon
        "#660000", // Dark maroon
      ];

      const uniqueProjectIDs = Array.from(new Set(WeeklyEntries.map((d) => d.project_id)));
      const colorScale = d3.scaleOrdinal().domain(uniqueProjectIDs).range(reddishColors);

      const tooltip = d3.select(tooltipRef.current);

      svg
        .selectAll(".bar")
        .data(WeeklyEntries)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(new Date(d.start).toDateString())!)
        .attr("y", (d) => yScale(d.duration / 3600))
        .attr("height", (d) => yScale(0) - yScale(d.duration / 3600))
        .attr("width", xScale.bandwidth())
        .attr("fill", (d) => colorScale(d.project_id))
        .on("mouseover", (event, d) => {
          const projectName = projectID[d.project_id] || "Misc";
          tooltip
            .style("opacity", 1)
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 20}px`)
            .html(
              `<strong>Project:</strong> ${projectName}<br/><strong>Duration:</strong> ${(d.duration / 3600).toFixed(2)} hrs`,
            );
        })
        .on("mouseout", () => {
          tooltip.style("opacity", 0);
        });

      const xAxis = d3.axisBottom(xScale);

      svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(xAxis)
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");
    }
  }, [graphData]);

  return (
    <>
      <h1>My Time Log</h1>

      {currentTask && (
        <p className="prose">
          <i> — Currently {currentTask.description} — </i>
        </p>
      )}

      <ResponsiveContainer width="75%" height={400}>
        <>
          <svg ref={svgRef} width="100%" height="400"></svg>
          <div
            ref={tooltipRef}
            style={{
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              backgroundColor: "white",
              padding: "5px",
              border: "1px solid #ddd",
              borderRadius: "3px",
              fontSize: "12px",
            }}
          ></div>
        </>
      </ResponsiveContainer>
    </>
  );
};

const getColor = (index: number): string => {
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#87ceeb"];
  return colors[index % colors.length];
};
