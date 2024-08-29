import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateModal";
import NoteModal from "./NoteModal";
import { Modal } from "react-bootstrap";

function App() {
  const [notesList, setNotesList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [createAreaModalShow, setCreateAreaModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalId, setModalId] = useState();

  function updateNotesList(note) {
    setNotesList((prev) => {
      return [note, ...prev].filter(
        (element, index, array) => array.indexOf(element) === index
      );
    });
    setCreateAreaModalShow(false);
  }

  function deleteNote(id) {
    setNotesList((prev) => {
      return prev.filter((note, index) => index !== id);
    });
  }

  function expandNote(id, title, content) {
    setModalShow(true);
    setModalTitle(title);
    setModalContent(content);
    setModalId(id);
  }

  function saveNote(id, event) {
    const { innerText } = event.target;
    setNotesList((prev) => {
      return prev.map((note, index) => {
        if (index === id) {
          note = {
            ...note,
            [event.target.getAttribute("data-name")]: innerText,
          };
        }
        return note;
      });
    });
  }

  function handleCreateAreaCancel() {
    setCreateAreaModalShow(false);
  }

  return (
    <div className="d-flex flex-column h-100 custom-height">
      <Header onAddClick={() => setCreateAreaModalShow(true)} />
      <main className="container">
        <Modal
          show={createAreaModalShow}
          onHide={() => setCreateAreaModalShow(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateArea
              handleSubmit={updateNotesList}
              onCancel={handleCreateAreaCancel}
            />
          </Modal.Body>
        </Modal>

        <NoteModal
          title={modalTitle}
          content={modalContent}
          id={modalId}
          show={modalShow}
          setModalShow={setModalShow}
          onHide={() => setModalShow(false)}
          saveNote={saveNote}
        />

        <div>
          {notesList.map((note, index) => (
            <Note
              expandNote={expandNote}
              deleteNote={deleteNote}
              id={index}
              key={note.title + note.content}
              title={note.title}
              content={note.content}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
