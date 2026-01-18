"use client";
import { Suspense, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Runs from "./runs";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { WindowWidth } from "@utils/windowDimmensions";

// interface RunProps {
// 	session: string;
// 	date: Date;
// 	distance: number;
// 	time: string;
// 	splits: string[];
// }

const parseTimeToSeconds = (time) => {
  const [minutes, seconds] = time.split(":").map(Number);
  return minutes * 60 + seconds;
};

const formatSecondsToTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const splitData = Runs.map((run) =>
  run.splits
    .filter((split) => split !== "00:00")
    .map((split, km) => ({
      session: run.session,
      km: km + 1,
      time: parseTimeToSeconds(split),
    })),
).flat();

const SplitChart = () => {
  const width = WindowWidth() > 1000 ? WindowWidth() - 500 : WindowWidth() - 80;

  return (
    <LineChart data={splitData} width={width} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="km"
        label={{ value: "Kilometers", position: "insideBottomRight", offset: 0 }}
        type="number"
        ticks={[1, 2, 3, 4, 5]}
        domain={[1, 5]}
        allowDecimals={false}
      />
      <YAxis label={{ value: "Time", angle: -90, position: "insideLeft" }} tickFormatter={formatSecondsToTime} />
      <Tooltip labelFormatter={(label) => `KM ${label}`} formatter={(value) => formatSecondsToTime(value)} />
      {Runs.map((run, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey="time"
          data={run.splits.map((split, km) => ({
            km: km + 1,
            time: parseTimeToSeconds(split),
            session: run.session,
          }))}
          name={run.session}
          stroke={`hsl(${(index * 360) / Runs.length}, 70%, 50%)`}
        />
      ))}
    </LineChart>
  );
};

const C25KPage = () => {
  useEffect(() => {
    document.title = "Fitness | Yung Higue ";
  }, []);

  return (
    <section>
      <div className="flex column">
        <Suspense fallback={<Skeleton count={1} />}>
          <SplitChart />
        </Suspense>
      </div>
      <p className="prose glassmorphic" style={{ marginTop: "2rem", marginBottom: "3rem" }}>
        I'm trying to walk more then return to using "<Link href="https://zrx.app/">Zombies, Run 5K Training</Link>" to do an 8 week program of the Couch
        to 5KM challenge. I attempted this briefly before, but I have never made it fully through and would like to
        improve my running ability.
      </p>

      <h2 className="prose glassmorphic">Helpful Resources</h2>
      <ol className="prose glassmorphic">
        <li>
          <Link href="https://www.zombiesrungame.com/">Zombies, Run!</Link> - An app that makes running more engaging by
          incorporating a story and missions.
        </li>
        <li>
          <Link href="https://www.c25k.com/">Couch to 5K</Link> - A popular program designed to help beginners gradually build up
          their running ability.
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=_kGESn8ArrU&pp=ygUKaG93IHRvIHJ1bg%3D%3D">How to run properly</Link>{" "} - A video tutorial on proper running form and techniques to prevent injuries.
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=B9ie7aRTCnE&pp=ygUcaG93IHRvIGJyZWF0aGUgd2hpbGUgcnVubmluZw%3D%3D">How To Breathe While Running
          </Link>{" "}- A video tutorial on proper breathing techniques while running as evolution failed me by making my instinct holding my breath.
        </li>
        <li>
          <Link href="https://docs.google.com/spreadsheets/d/1a8tlZ-zbF695HA3Lmm20OIYeYYxo1lmUOczUXKLoL4s/edit?gid=1833143925#gid=1833143925">Spreadsheet of all Bodyweight Fitness Progressions</Link> - A comprehensive spreadsheet that tracks progressions for various bodyweight exercises, useful for tracking strength training alongside running.
        </li>
      </ol>
    </section>
  );
};

export default C25KPage;
