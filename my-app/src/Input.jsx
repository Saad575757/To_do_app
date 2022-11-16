import React from "react";
import { useState } from "react";
import "./Input.css";

const Input =(props) =>{
    const[input, setInput]= useState({
        content:"",
    });
    const enterEvent = (event) =>{
        const{name, value} = event.target;
        setInput((prevData)=>{
            return{
                ...prevData,
                [name]: value,
            }
        })
        

    }
    const clickEvent=()=>{
        props.readEvent(input);
        setInput({
            content:"",
        });

    }
    return(
      <>
      <div className="inputfield">
        <form>
            <input type="text" name="content" value={input.content} className="input" onChange={enterEvent} placeholder="Enter todos" />
        </form>
        <button className="button" onClick={clickEvent}>Add</button>
      </div>
  
      </>
  
    );
  };
  export default Input;
  