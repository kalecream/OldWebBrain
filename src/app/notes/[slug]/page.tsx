import { getAllNotes, parseWikiLinks } from "@app/db/notes";
import { CustomMDX } from "../../components/mdx";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageReadTime } from "@utils/PageReadTime";

export const generateStaticParams = async () => {
  return getAllNotes().map(({ slug }) => ({ slug }));
};

export const NotePage = ({ params }) => {
  const notes = getAllNotes();
  const note = notes.find((n) => n.slug === params.slug);
  if (!note) return notFound();

  return (
    <section>
      <Suspense fallback={<p />}>
        <div className="prose">
          <div className="info">
            <p className="text-center">
              <PageReadTime readingSpeedWPM={250} />. {note.data.date ? "Seeded: " + note.data.date + ". " : ""}{" "}
              {note.data.tend ? "Tended: " + note.data.tend + ". " : ""}
            </p>
          </div>
          <CustomMDX source={parseWikiLinks(note.body)} />
        </div>
      </Suspense>
    </section>
  );
};

export default NotePage;
