import react from "react";
import reactDom from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
reactDom.render(
  <div>
    <Header></Header>
    <Note></Note>
    <Footer></Footer>
  </div>,
  document.getElementById("root")
);
