import { getAllNotes } from "@app/db/notes";
import { NextResponse } from "next/server";

export const GET = async () => {
  const notes = getAllNotes();
  const noteSlugs = new Set(notes.map((n) => n.slug));
  const nodes = notes.map(({ slug, tags }) => ({ id: slug, group: tags.length > 0 ? tags[0] : "untagged" }));

  const links = notes.flatMap(({ slug, links }) =>
    links.map((target) => ({ source: slug, target, missing: !noteSlugs.has(target) })),
  );

  return NextResponse.json({ nodes, links });
}
