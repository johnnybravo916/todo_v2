import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const handleNote = (e) => {
        const { name, value } = e.target;

        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    };

    const handleAddNote = (e) => {
        e.preventDefault();
        setNote({
          title: "",
          content: "",
        })
        props.addNote(note);
    };

    return (
        <div>
            <form>
                <input
                    onChange={handleNote}
                    name="title"
                    placeholder="Title"
                    value={note.title}
                />
                <textarea
                    onChange={handleNote}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                />
                <button onClick={handleAddNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
