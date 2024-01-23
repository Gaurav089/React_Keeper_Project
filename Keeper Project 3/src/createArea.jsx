import React, { useState } from "react";
function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="form">
      <form className="input">
        <input
          className="title"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <br />
        <textarea
          className="textarea"
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          value={note.content}
          rows="3"
        />
        <br />
        <button onClick={submitNote} className="button">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
