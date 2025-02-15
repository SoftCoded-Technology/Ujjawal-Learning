import React, { useState } from 'react'

const ObjectOfObject = () => {

    const [lists,setLists] = useState({
        id : 101,
        name : {
            fname : "Ujjawal",
            lname : "Sahu"
        },
        age : 22,
    })

    const handleAdd = () => {
        setLists({...lists,email : "ujjawalsahu121@gmail.com",name : {...lists.name, mname : "nhi hai"}});
    } 
    const handleDelete = () => {
        const {age, ...rest} = lists;
        setLists(rest);
    }
    const handleUpdate = () => {
      setLists({...lists,age : 21, name : {...lists.name, mname : "shi me nhi hai"}});
        // setLists({...lists, age : 21,name : {...lists.name,mname : "shi me nhi hai"}});
    }

  return (
    <div>

      <button onClick={handleAdd} >Add</button>
      <button onClick={handleDelete} >Delete</button>
      <button onClick={handleUpdate} >Update</button>
      <br/>
      <li>{lists.id}</li>
      <li>{lists.name.fname} {lists.name.mname} {lists.name.lname}</li>
      <li>{lists.age}</li>
      <li>{lists.email}</li>
    </div>
  )
}

export default ObjectOfObject
