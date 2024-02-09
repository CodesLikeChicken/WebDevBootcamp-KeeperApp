import React from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Note } from "./Note";

import notes from "../notes";
import CreateArea from "./CreateArea";

export function App() {
  return (
    <>
      <Header />
      <CreateArea />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
      <Footer />
    </>
  );
}
