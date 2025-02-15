import React, { useState } from 'react'

const ArrayOfObject = () => {

    const [items,setItems] = useState([
        {id : 100,name : "item1", value : 3},
        {id : 101,name : "item2", value : 4},
        {id : 102,name : "item3", value : 5},
        {id : 103,name : "item4", value : 6}
    ]);

    const addItem = () => {
        setItems([...items,
            {id : items.length,
             name : "item1",
             value : Math.floor(Math.random() * 10) + 1
            }
        ])
    }
    const obj = {id : 111,name : "item11", value : 9}
    const handleAdd = () => {
        setItems([...items,obj])
    }

    const handleDelete = () => {
        setItems(items.filter((item) => item.id !== 111 ))
    }

    // const handleUpdate = () => {
    //     setItems(items.map((item) => item.name === "item11" ? {...item,name : "item22"}    : item))
    // }

    const handleUpdate = () => {
        setItems(items.map((item)=> item.name === "item11" ? {...item,name : "item333"} : item));
    }

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item)=> 
        (<li key={item.id}>
            {item.name}  - {item.id}
        </li>)
         )}
      </ul>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default ArrayOfObject
