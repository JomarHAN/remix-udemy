import noteListStyle from "./NoteList.css";

const NoteList = ({ notes }) => {
  return (
    <ul id="note-list">
      {notes.map((note, index) => (
        <li className="note" key={note.id}>
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
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

export const links = () => [{ rel: "stylesheet", href: noteListStyle }];
