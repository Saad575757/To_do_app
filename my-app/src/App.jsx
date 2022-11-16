import React from 'react';
import Note from './Note';
import Input from './Input';
import Main from './Main';
import './App.css';
import { useState } from 'react';

const App =() =>{
  const [item, setItem]=useState([]);

  const readType=(input)=>{
    setItem((prevdata)=>{
      return(
        [...prevdata, input]
      );
      
    })

    
  }
  const onDelete=(id)=>{
    setItem((prevdata)=>
    prevdata.filter((currdata,index)=>{
      return index !== id;

    })
    )
  }
  return(
    <>
    <div className='center'>
    <Main />
    <Input readEvent={readType} />
    {item.map((val,index)=>{
      return <Note 
      key={index}
      id={index}
      content={val.content}
      deleteNote={onDelete}
      />
    })}
    </div>
   

    </>

  );
};
export default App;


