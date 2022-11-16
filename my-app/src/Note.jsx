import React from "react";
import "./Note.css";

const Note =(props) =>{
    const deleteEvent =()=>{
        props.deleteNote(props.id);
    }
    return(
      <>
      <div className="note">
        <p className=".para">{props.content} </p>
        <button className=".button" onClick={deleteEvent}>Delete</button>

      </div>
  
      </>
  
    );
  };
  export default Note;
  