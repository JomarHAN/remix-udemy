import { redirect } from "@remix-run/node";
import {
  Link,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import NewNote, { links as newNoteStyle } from "~/components/NewNote";
import NoteList, { links as noteListStyle } from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/notes";

export default function NotesPage() {
  const notes = useLoaderData();

  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export const loader = async () => {
  const notes = await getStoredNotes();
  if (!notes || notes.length === 0) {
    throw new Error("no notes");
  }
  return notes;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  //   Add validation...
  if (noteData.title.trim().length < 5) {
    return { message: "Title must has at least 5 character long." };
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 3000));
  await storeNotes(updatedNotes);
  return redirect("/notes");
};

export const ErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <main className="error">
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
        <p>
          Back to <Link to={"/"}>safety</Link>!
        </p>
      </main>
    );
  }

  if (error.message == "no notes") {
    return (
      <main>
        <NewNote />
        <p className="info-message">No Notes Existing Found!</p>
      </main>
    );
  }

  return (
    <main>
      <NewNote />
      <p className="info-message">Unknow Error</p>
    </main>
  );
};

export const links = () => [...newNoteStyle(), ...noteListStyle()];
