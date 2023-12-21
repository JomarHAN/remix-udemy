import { Form, useNavigation } from "@remix-run/react";

import newNoteStyle from "./NewNote.css";

export default function NewNote() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" rows="5" required></textarea>
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Note"}
        </button>
      </div>
    </Form>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: newNoteStyle }];
}
