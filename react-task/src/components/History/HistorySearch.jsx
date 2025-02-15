import React from 'react'
import { useState } from 'react'

const HistorySearch = () => {

    const [text,setText] = useState("");
    const [history,setHistory] = useState([]);

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(text.trim().toLowerCase() === "clear") {
            setHistory([]);
        } 
        else if (text.trim() !== "") {
            setHistory((prev) => ([text,...prev]))
        }
        setText("");
    }

  return (
    <>
    <h1>Search History</h1>
    <input 
    type="text"
    name="text"
    required
    placeholder='Enter something'
    value={text}
    onChange={handleOnChange}
    />
    <button type='submit' onClick={handleOnSubmit} >Search</button>
    <br /><br />
    { history.length > 0 && (<div>
    <h1>History : </h1> <br />
    <b>
    {history?.map((item,index)=> (
        <li key={index}>{item}</li>
    ))}
    </b>
    </div>)}
    </>


  )
}

export default HistorySearch    