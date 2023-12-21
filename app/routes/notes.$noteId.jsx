import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNotes } from "~/data/notes";

import styles from "~/styles/note-details.css";

export default function NoteDetailsPage() {
  const note = useLoaderData();

  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to={"/notes"}>Back to Notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id="note-details-content">{note.content}</p>
    </main>
  );
}

export const loader = async ({ params }) => {
  const notes = await getStoredNotes();
  const noteId = params.noteId;
  const selectedNote = notes.find((note) => note.id === noteId);

  if (!selectedNote) {
    throw new Error(`Couldn't Find a Note with ID: ${noteId}`);
  }

  return selectedNote;
};

export const meta = ({ data }) => {
  return [
    {
      title: data.title,
      description: data.content,
    },
  ];
};

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};
