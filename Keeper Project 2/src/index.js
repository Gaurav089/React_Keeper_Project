import react from "react";
import reactDom from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";
function createNote(notes) {
  return (
    <Note key={notes.key} title={notes.title} content={notes.content}></Note>
  );
}
reactDom.render(
  <div>
    <Header></Header>
    {notes.map(createNote)}
    <Footer></Footer>
  </div>,
  document.getElementById("root")
);
