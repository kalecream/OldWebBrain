"use client";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { unstable_noStore as noStore } from "next/cache";
import styles from "./Guestbook.module.scss";
import MusicPlayer from "@components/MusicPlayer/MusicPlayer";
import { GuestCard } from "./GuestCard";

const formatDate = (date: string) => {
  noStore();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
  });

  return `${fullDate}`;
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

  const randomChar = () => {
    const chars = "BCDEFGHIJKMNOPQRSTUVWYbcdefghiknqrstuvwxz_";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return (
    <section>
      <h1>Guest Log</h1>
      <p className="prose" style={{ textAlign: "center" }}>
        You were here. Leave your mark. <br />
        This guestbook was heavily inspired by <Link href={"https://eva.town/guestbook"}>eva.town</Link>.
      </p>
      <div className={styles.notes}>
        <GuestCard id={0} href={""}>
          <form onSubmit={handleSubmit} className={styles.note_form}>
            <textarea
              value={note}
              name="content"
              placeholder="* 140 characters left"
              rows={4}
              cols={28}
              maxLength={140}
              onChange={(e) => setNote(e.target.value)}
              required
            ></textarea>
            <input type="text" placeholder="* From?" required value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="https://(url)" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button type="submit">Scribble</button>
          </form>
        </GuestCard>
        <Suspense fallback={<p className="text-center">Loading Logs...</p>}>
          {entries.map((entry, i) => {
            const randomRotation = `${Math.random() * 6 - 3}deg`;
            const randomTranslateX = `${Math.random() * 24 - 12}px`;

            return (
              <div key={entry.id} className={styles.note}>
                <GuestCard
                  id={i}
                  href={""}
                  style={{
                    transform: `rotate(${randomRotation}) translateX(${randomTranslateX})`,
                  }}
                >
                  <div className={styles.note_bg}>
                    <span className={styles.note_content}>{entry.note}</span>
                    <div className={styles.note_info}>
                      {entry.url ? (
                        <Link
                          href={entry.url.split(7) == "https://" ? `${entry.url}` : `https://${entry.url}`}
                          target="_blank"
                          className={styles.name_link}
                        >
                          {entry.name}
                        </Link>
                      ) : (
                        <span className={styles.name}>{entry.name}</span>
                      )}
                      <span className={styles.date} title={entry.createdAt}>
                        {formatDate(entry.createdAt)}
                      </span>
                    </div>
                  </div>
                </GuestCard>
              </div>
            );
          })}
        </Suspense>
      </div>
      <MusicPlayer
        audioSrc={"/audio/introvert.mp3"}
        songTitle={"Introvert // Laxcity"}
        audioLink={"https://www.youtube.com/watch?v=vJAK7Isi784&t=47s&pp=ygURaW50cm92ZXJ0IGxheGNpdHk%3D"}
      />
    </section>
  );
};

export default Guestbook;
