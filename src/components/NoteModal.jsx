import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function NoteModal(props) {
  const [isEditable, setIsEditable] = useState(false);

  const handleBlur = (event) => {
    props.saveNote(props.id, event);
    setIsEditable(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
      scrollable={true}
    >
      <Modal.Header className="no-border" closeButton>
        <div style={{ width: "100%", textAlign: "center" }}>
          <h2>Edit Notes</h2>
        </div>
      </Modal.Header>

      <Modal.Body
        style={{
          outline: "1px solid #cac2c0",
          height: "100%",
          padding: "1rem",
        }}
      >
        <div>
          {/* Label and Editable Title */}
          <label htmlFor="note-title" className="form-label" style={{ display: "block", marginBottom: "0.5rem" }}>
            Edit Heading
          </label>
          <div
            id="note-title"
            style={{
              marginBottom: "1rem",
              borderBottom: isEditable ? "1px solid #cac2c0" : "none",
              paddingBottom: "0.5rem",
              cursor: "text",
            }}
            onClick={() => setIsEditable(true)}
          >
            <h5
              className="title-color"
              contentEditable={isEditable}
              data-name="title"
              onBlur={handleBlur}
              suppressContentEditableWarning={true}
              style={{
                margin: 0,
                minHeight: "1.5rem", 
              }}
            >
              {props.title || "Edit Title"}
            </h5>
          </div>
          
          {/* Label and Editable Content */}
          <label htmlFor="note-content" className="form-label" style={{ display: "block", marginBottom: "0.5rem" }}>
            Edit Content
          </label>
          <div
            id="note-content"
            style={{
              padding: "0.5rem",
              border: isEditable ? "1px solid #cac2c0" : "none",
              cursor: "text",
            }}
            onClick={() => setIsEditable(true)}
          >
            <p
              className="description-color"
              contentEditable={isEditable}
              data-name="content"
              onBlur={handleBlur}
              suppressContentEditableWarning={true}
              style={{
                margin: 0,
                minHeight: "2rem", 
                whiteSpace: "pre-wrap", 
                wordWrap: "break-word",
              }}
            >
              {props.content || "Edit Content"}
            </p>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="no-border">
        <Button
          style={{ background: "#4d686e", border: "none" }}
          onClick={() => {
            setIsEditable(false);
            props.setModalShow(false);
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NoteModal;
