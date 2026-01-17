"use client";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import garden from "@styles/modules/Garden.module.scss";

export const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const filteredNotes = notes
    .filter(({ data, slug }) => (data.title || slug).toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return (
    <div className={garden.wrapper}>
      <section style={{ padding: 0, margin: "auto", marginTop: "3rem"  }}>
        <input
          type="text"
          placeholder="Search notes..."
          className="center blur"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            maxWidth: "65rem",
            width: "100%",
            height: "2.5rem",
            padding: "1rem",
            backgroundColor: "transparent",
            color: "var(--textcolor)",
            border: "var(--border)",
            borderRadius: "var(--borderRadius)",
          }}
        />
        <ul className={garden["notes-list"]}>
          <Suspense>
            {filteredNotes.length > 0 ? (
              filteredNotes.map(({ slug, data }) => (
                <li key={slug} className="garden.note">
                  <Link href={`/notes/${slug}`} className="">
                    <small className={garden["note-title"]}>{data?.title || slug.split("-").join(" ")}</small>
                   <small className={garden["note-date"]}>{data?.date?.toLocaleString() || ""}</small>
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-center center">...Loading Notes...</p>
            )}
          </Suspense>
        </ul>
      </section>
    </div>
  );
};

export default NotesPage;
