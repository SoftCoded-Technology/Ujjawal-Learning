import React, { useState } from 'react'

const Object = () => {

    const [obj,setObj] =useState({
        count1 : 1,
        count2 : 1,
        count3 : 1,
        count4 : 1,
        count5 : 1
    })

    const handleOnClick1 = () => {
        setObj({...obj,count1:obj.count1+1});
    }

    const handleOnClick2 = () => {
        setObj({...obj,count2 : obj.count2+1})
    }

    const handleOnClick3 = () => {
        setObj({...obj,count3 : obj.count3+1})
    }

    const handleClick = (key) => {
        setObj((prevObj)=> ({
            ...prevObj,
            [key] : prevObj[key]+1
        }))
    }

  return (
    <div>
      <button onClick={handleOnClick1}>count1</button> <li>{obj.count1}</li>
      <button onClick={handleOnClick2}>count2</button> <li>{obj.count2}</li>
      <button onClick={handleOnClick3}>count3</button> <li>{obj.count3}</li>
    <br/>
        <button onClick={() => handleClick("count4")}>count4</button> <li>{obj.count4}</li>
        <button onClick={() => handleClick("count5")}>count5</button> <li>{obj.count5}</li>
    </div>
  )
}

export default Object
