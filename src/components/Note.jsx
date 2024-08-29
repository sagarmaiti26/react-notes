import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Note(props) {
  return (
    <article
      className="note"
    >
      <content>
        <h1 className="title-color">{props.title}</h1>
        <p className="description-color">{props.content}</p>
      </content>
      <button
        onClick={(e) => {
          props.deleteNote(props.id);
          e.stopPropagation();
        }}
      >
        <DeleteIcon fontSize="large" />
      </button>
      <button
          onClick={() => props.expandNote(props.id, props.title, props.content)}
        >
          <EditIcon fontSize="large" />
        </button>
      
    </article>
  );
}

export default Note;
