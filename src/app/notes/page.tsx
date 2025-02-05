"use client";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import garden from "@styles/modules/Garden.module.scss";

const ForceGraph = dynamic(() => import("../components/Graph"), { ssr: false });

export const Graph = () => {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    fetch("/api/notes/graph")
      .then((res) => res.json())
      .then((data) => setGraphData(data));
  }, []);

  return (
    <div className="">
      <ForceGraph data={graphData} />
    </div>
  );
};

export const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const filteredNotes = notes.filter(({ data, slug }) =>
    (data.title || slug).toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={garden.wrapper}>
      <section className="">
        <h1>Digital Garden</h1>
        <p className="prose">
          My notes across various life sectors. I have my life separated into 9 life sectors: Physical, Mental,
          Intellectual, Financial, Occupational, Organisational, Recreational, Social, Spiritual.
        </p>
        <input
          type="text"
          placeholder="Search notes..."
          className="center blur"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "45rem",
            height: "3rem",
            padding: "1rem",
            backgroundColor: "transparent",
            color: "var(--textcolor)",
            border: "var(--border)",
            borderRadius: "var(--borderRadius)",
          }}
        />
        <Suspense>
          <ul className={garden["notes-list"]}>
            {filteredNotes.length > 0 ? (
              filteredNotes.map(({ slug, data }) => (
                <li key={slug} className="">
                  <Link href={`/notes/${slug}`} className="">
                    {data?.title || slug}
                  </Link>
                </li>
              ))
            ) : (
              <li className="">No notes found</li>
            )}
          </ul>
        </Suspense>
      </section>
      <section>
        <Suspense>
          <Graph />
        </Suspense>
      </section>
    </div>
  );
};

export default NotesPage;
