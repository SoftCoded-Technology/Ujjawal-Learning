import React, { useState } from 'react'

function UpdateNestedObject() {

    const [game,setGame] = useState({
        id : 1,
        player: {
            name : "john",
        }
    })

    const handleClick = ()=>{
        // setGame({...game,player : {
        //     ...game.player, name : "Bob"
        // }})
    }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {game.player.name}
    </div>
  )
}

export default UpdateNestedObject
