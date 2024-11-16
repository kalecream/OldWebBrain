"use client";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { fetchTimeLog } from "@utils/togglApi";

// https://engineering.toggl.com/docs/api/time_entries/#parameters
interface TimeLog {
  description: string;
  start: string;
  project_id: number;
  duration: number;
}

const projectID: Record<string, string> = {
  "176878046": "Organisation",
  "196581248": "Work",
  "190040032": "Social",
  "198974982": "Personal",
  "196579838": "LANDS",
  "190040024": "Physical",
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

const StackedTimeLog: React.FC = () => {
  const [graphData, setGraphData] = useState<any[]>([]);
  const [currentTask, setCurrentTask] = useState<TimeLog | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries: TimeLog[] = await fetchTimeLog();
        // console.log(entries);

        if (entries.length > 0) {
          const latestTask = entries[0];
          setCurrentTask(latestTask);
        }

        const validEntries = entries.filter(
          (entry) => entry.start && entry.project_id && typeof entry.duration === "number" && entry.duration > 0,
        );

        const aggregatedData: Record<string, Record<string, number>> = {};

        validEntries.forEach((entry) => {
          const date = formatDate(entry.start);
          const projectName = projectID[entry.project_id] || "Unknown Project";
          const duration = entry.duration / 3600;

          if (!aggregatedData[date]) aggregatedData[date] = {};
          if (!aggregatedData[date][projectName]) {
            aggregatedData[date][projectName] = 0;
          }

          aggregatedData[date][projectName] += parseFloat(duration.toPrecision(2));
        });

        const formattedData = Object.entries(aggregatedData).map(([date, projects]) => ({
          date,
          ...projects,
        }));

        setGraphData(formattedData);
      } catch (error) {
        console.error("Error fetching time log data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>My Time Log</h1>
      {currentTask && (
        <p className="prose">
          <i>Currently  {currentTask.description} for {projectID[currentTask.project_id]}. </i>
        </p>
      )}

      <ResponsiveContainer width="80%" height={400}>
        <BarChart data={graphData}>
          <XAxis dataKey="date" />
          <Tooltip />
          {Object.keys(graphData[0] || {})
            .filter((key) => key !== "date")
            .map((projectName, index) => (
              <Bar key={projectName} dataKey={projectName} stackId="a" fill={getColor(index)} />
            ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

const getColor = (index: number): string => {
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#87ceeb"];
  return colors[index % colors.length];
};

export default StackedTimeLog;
