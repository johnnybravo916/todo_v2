import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const handleNote=(e)=>{
    const {name, value} = e.target;

    setNote((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      }
    })
  }


  return (
    <div>
      <form>
        <input onChange={handleNote} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleNote} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={(e)=>{props.addNote(note,e)}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
