import React from "react";

function Note(props) {

  // const deleteNote=()=>{
  //   props.delete(props.id)
  // }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{props.deleteNote(props.id)}}>DELETE</button>
    </div>
  );
}

export default Note;
