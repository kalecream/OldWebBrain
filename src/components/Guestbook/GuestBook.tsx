"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { unstable_noStore as noStore } from "next/cache";
import styles from "./Guestbook.module.scss";

const formatDate = (date: string) => {
  noStore();
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  let minutesAgo = Math.floor(timeDifference / (1000 * 60));
  let secondsAgo = Math.floor(timeDifference / 1000);

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (secondsAgo < 1) {
    return `just now`;
  } else if (secondsAgo < 60 || minutesAgo < 1) {
    return `${secondsAgo} seconds ago`;
  } else if (hoursAgo < 1) {
    return `${minutesAgo} minutes ago`;
  } else if (hoursAgo < 2) {
    return `${hoursAgo} hour ago`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  } else if (daysAgo < 2) {
    return `${fullDate} (yesterday)`;
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
};

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await fetch("/api/guestbook");
      const data = await res.json();
      setEntries(data);
    };
    fetchEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !note) return;

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, note, url }),
      });

      if (res.ok) {
        const newEntry = await res.json();
        setEntries([newEntry, ...entries]);
        setName("");
        setNote("");
        setUrl("");
      } else {
        console.error("Failed to submit the note:", await res.json());
      }
    } catch (error) {
      console.error("Error submitting the note:", error);
    }
  };

  return (
    <section>
      <h1>Guest Log</h1>
      <p>
        You were here. Leave your mark. This guestbook was heavily inspired by the one at{" "}
        <Link href={"eva.town/guestbook"}>Eva.Town</Link> and code is taken from her tutorial.{" "}
      </p>
      <div className={styles.notes}>
        <form onSubmit={handleSubmit} className={styles.note_form}>
          <textarea
            value={note}
            name="content"
            placeholder="* 140 characters left to make your mark."
            rows={4}
            cols={28}
            maxLength={180}
            onChange={(e) => setNote(e.target.value)}
            draggable={false}
            required
          ></textarea>
          <input type="text" placeholder="* Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="? https://(url)" value={url} onChange={(e) => setUrl(e.target.value)} />
          <button type="submit">Scribble</button>
        </form>
        {entries.map((entry) => {
          const randomRotation = `${Math.random() * 6 - 3}deg`;
          const randomTranslateX = `${Math.random() * 24 - 12}px`;

          return (
            <p
              key={entry.id}
              className={styles.note}
              style={{
                transform: `rotate(${randomRotation}) translateX(${randomTranslateX})`,
              }}
            >
              <span className={styles.note_content}>{entry.note}</span>

              {entry.url ? (
                <Link href={`${entry.url}`} target="_blank" className={styles.name_link}>
                  {entry.name}
                </Link>
              ) : (
                <span className={styles.name}>{entry.name}</span>
              )}
              <span className={styles.date} title={entry.createdAt}>
                {formatDate(entry.createdAt)}
              </span>
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default Guestbook;
