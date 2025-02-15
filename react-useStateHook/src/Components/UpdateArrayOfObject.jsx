import React, { useState } from 'react'

function UpdateArrayOfObject() {

  const [cart,setCart] = useState({
    discount : 1,
    items : [
      { id : 1, title :"Product 1", quantity : 1},
      { id : 2, title :"Product 2", quantity : 1},
    ]
  })

   
    const handleClick = ()=>{
      // setCart({...cart, item : cart.items.map((item) => item.id === 1 ? {...item,quantity:item.quantity+1} : item)})
      setCart({...cart,items : cart.items.map((item)=> item.id === 1 ? {...item,quantity:item.quantity+1} : item)})
    }




    // setCart({...cart,items : cart.items.map((item)=> item.id === 1 ? {...item,quantity:item.quantity+1} : item)})

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {cart.items[0].quantity}
      {cart.items.map((item)=> <li>{item.quantity}</li>)}
    </div>
  )
}

export default UpdateArrayOfObject
