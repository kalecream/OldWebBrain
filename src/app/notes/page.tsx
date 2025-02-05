"use client";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import garden from "@styles/modules/Garden.module.scss";
import HeroName from "@components/hero/heroName/heroName";

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
  ).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return (
    <div className={garden.wrapper}>
      <section className="">
        <HeroName name="Garden" />
        <p className="prose blur">
          I have my life separated into sectors: Physical, Mental,
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
                  </Link><br/>
                  <small>{data?.date || ''}</small>
                </li>
              ))
            ) : (
              <li className="">10/10, No notes.</li>
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
