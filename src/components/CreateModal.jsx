import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleInput(event) {
    const { name, value } = event.target;
    setNote((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleCancel() {
    props.onCancel();
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          props.handleSubmit(note);
          setNote({
            title: "",
            content: ""
          });
          event.preventDefault();
        }}
      >
     
        <label htmlFor="title" className="title-label">
          Title
        </label>
        <input
          id="title"
          className="title-color"
          onChange={handleInput}
          name="title"
          placeholder="Enter Note Title"
          value={note.title}
          maxLength="50"
        />

        <label htmlFor="content" className="content-label">
          Content
        </label>
        <textarea
          id="content"
          onChange={handleInput}
          name="content"
          placeholder="Enter note content"
          rows="3"
          value={note.content}
          className="description-color"
        />
        
        <button disabled={!note.title} type="submit">
          Save
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
