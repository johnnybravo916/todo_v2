import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list,setList] = useState([])

  const handleAddNote=(note,event)=>{
    event.preventDefault();
    setList((value)=>{
      return[
        ...value,
        note
      ]
    })
  }

  const handleDeleteNote=(id)=>{
    console.log("clicked " + id)
    setList((prevValue)=>{
      return(
        prevValue.filter((i)=>{
          return(
            id !== i
          )
        })      
      )

    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={handleAddNote}/>{
        list.map((item, index)=>{
          return(
            <Note id={index} key={index} title={item.title} content={item.content} deleteNote={handleDeleteNote} />
          )
        })
      }
      <Footer />
    </div>
  );
}

export default App;
