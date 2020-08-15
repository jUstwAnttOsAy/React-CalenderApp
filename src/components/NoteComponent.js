import React from "react";
import NoteHeader from "./NoteComponents/NoteHeader";
import NoteList from "./NoteComponents/NoteList";

function NoteComponent(props) {
  return (
    <div className="content">
      <NoteHeader date={props.date} />
      <NoteList date={props.date} />
    </div>
  );
}

export default NoteComponent;
