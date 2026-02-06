import { getAllNotes } from "@app/db/notes";

export const GET = () => {
  const notes = getAllNotes();
  return Response.json(notes);
};
