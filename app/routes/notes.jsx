import NewNote, { links as newNoteStyle } from "~/components/NewNote";

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export const links = () => [...newNoteStyle()];
