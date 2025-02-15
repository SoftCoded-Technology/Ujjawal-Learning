import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const userData = useLoaderData();
    console.log(userData)
    const [data,setData] = useState([]);
    
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ujjawalsahu')
    //     .then(response => response.json())
    //     .then(data => {
    //         // console.log(data);
    //         setData(data);
    //     })
    // })

  return (
    <div className='text-center m-4 bg-gray-600text-white p-4 text-3xl'>Github Follower : {userData?.followers}
    <img src={userData?.avatar_url} alt="Github Profile Image" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json();
}