import React, { useState } from 'react'

function UpdateArrayState() {
    const [tags,setTags] = useState(['happy','cheerful']);

    const handleClick = ()=>{
        // Adding data in array state
        // setTags([...tags,"exciting"]);
        // setTags([...tags,"Ujjawal"]);
        // deleting data in array state
        // setTags(tags.filter((tag)=> tag!== "happy"))
        // setTags(tags.filter((tag)=> tag!== "Ujjawal"))
        // updating data in array state
        // setTags(tags.map((tag) => tag === "happy" ? "happyness" : tag))
        
    }

  return (
    <div>
    <button onClick={handleClick}>Click me </button>
    <ul>
    {tags.map((tag)=>(<li>{tag}</li>))}
    </ul>
    </div>
  )
}

export default UpdateArrayState
