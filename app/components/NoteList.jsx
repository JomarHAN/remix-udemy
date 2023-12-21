import { Link } from "@remix-run/react";

import noteListStyle from "./NoteList.css";

export default function NoteList({ notes }) {
  return (
    <ul id="note-list">
      {notes.map((note, index) => (
        <li className="note" key={note.id}>
          <Link to={note.id}>
            <article>
              <header>
                <ul className="note-meta">
                  <li>#{index + 1}</li>
                  <li>
                    <time dateTime={note.id}>
                      {new Date(note.id).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </li>
                </ul>
                <h2>{note.title}</h2>
              </header>
              <p>{note.content}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const links = () => [{ rel: "stylesheet", href: noteListStyle }];
