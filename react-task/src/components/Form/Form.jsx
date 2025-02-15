import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [user,setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        phoneNumber : "",
        password : ""
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setUser((prev)=> ({...prev,[name] : value}))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

  return (
    <>
    <form>
        <div>
            <h1>Sign Up</h1>
                <br/><br/>  
        <label htmlFor="firstName">
            <b>First Name</b>
        </label>
        <input 
        type="text" 
        name='firstName'
        placeholder='Enter firstName'
        required
        value={user.firstName}
        onChange={handleOnChange}
        />
        <br/><br/>
        <label htmlFor="lastName">
                <b>Last Name</b>
        </label>
        <input 
        type="text" 
        name='lastName'
        placeholder='Enter lastName'
        required
        value={user.lastName}
        onChange={handleOnChange}
        />
        <br/><br/>
        <label htmlFor="Email">
           <b>Email</b>
        </label>
        <input 
        type="email" 
        name="email" 
        required
        placeholder='Enter Email'
        value={user.email}
        onChange={handleOnChange}
        />
        <br/><br/>
        <label htmlFor="password">
        <b>Password</b>
        </label>
        <input 
        type="text" 
        name='password'
        required
        placeholder='Enter Password'
        value={user.password}
        onChange={handleOnChange}
        />
        <br/><br/>
        <label htmlFor="phoneNumber">
        <b>Phone Number</b>
        </label>
        <input 
        type="text" 
        name='phoneNumber'
        required
        placeholder='Enter Phone Number'
        value={user.phoneNumber}
        onChange={handleOnChange}
        />      
        <br/><br/>
        <div>
            <button onClick={handleOnSubmit} type='submit'>Submit</button>
        </div>
    </div>
    </form>
    </>
  )
}

export default Form