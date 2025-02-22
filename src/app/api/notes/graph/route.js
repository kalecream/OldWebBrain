import { getAllNotes } from "@app/db/notes";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const notes = getAllNotes();
    const noteSlugs = new Set(notes.map((n) => n.slug));
    const nodes = notes.map(({ slug, tags }) => ({ id: slug, group: tags.length > 0 ? tags[0] : "misc" }));

    const links = notes.flatMap(({ slug, links }) =>
      links.map((target) => ({ source: slug, target, missing: !noteSlugs.has(target) })),
    );

    return NextResponse.json({ nodes, links });
  } catch (error) {
    console.error("Error generating graph data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
