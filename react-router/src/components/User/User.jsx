import React from 'react'
import { useParams } from 'react-router-dom'

const {userid} = useParams();

const User = () => {
  return (
   <div>User : {userid}</div>
  )
}

export default User