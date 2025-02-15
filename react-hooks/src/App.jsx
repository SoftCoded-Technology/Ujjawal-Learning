import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  
  const passwordRef = useRef(null);

  const paasswordGenerator = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()[]{};':<>/?\|";
    
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=> {
    paasswordGenerator();
  },[length,charAllowed,numberAllowed,paasswordGenerator])

  return (
    <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-800 p-2" >
    <h1 className="text-white text-center my-3">Password Generator</h1>
    
    <div className="flex rounded-lg overflow-hidden mb-4 border border-gray-600">
      <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3  "
        placeholder="Password"
        ref={passwordRef}
        readOnly
      />
      <button onClick={copyPasswordToClipBoard} className="outline-none cursor-pointer bg-blue-700 text-white px-3 py-1 shrink-0">
        Copy
      </button>
    </div>
    
    <div className="flex text-sm gap-x-2">
      {/* Length Input */}
      <div className="flex items-center gap-x-1">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
      </div>

      {/* Number Checkbox */}
      <div className="flex items-center gap-x-1">
        <input 
          type="checkbox" 
          id="numberInput"
          defaultChecked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      {/* Characters Checkbox */}
      <div className="flex items-center gap-x-1">
        <input 
          type="checkbox" 
          id="charInput"
          defaultChecked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
  </div>
</>

  )
}

export default App
