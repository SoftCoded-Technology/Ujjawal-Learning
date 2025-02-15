import { useState } from "react";
function UpdateObjectState() {

  const [count,setCount] = useState({
    count1:0, count2:0, count3:0
  }) 

const handleClick1 = ()=>{
  setCount({...count,count1:count.count1+1})
}

const handleClick2 = ()=>{
  setCount({...count,count2:count.count2+1})
}
const handleClick3 = ()=>{
  setCount({...count,count3:count.count3+1})
}

const handleClick = (counter) => {
  setCount((prevCount) => ({
    ...prevCount,
    [counter]: prevCount[counter] + 1,
  }));
};

  return (
    <>
    <div style={{textAlign:"center"}}>
  <button onClick={handleClick("count1")}>Click me</button>
    <h1>{count.count1}</h1>
    </div>
    <div style={{textAlign:"center"}}>
  <button onClick={handleClick2}>Click me</button>
    <h1>{count.count2}</h1>
    </div>
    <div style={{textAlign:"center"}}>
  <button onClick={handleClick3}>Click me</button>
    <h1>{count.count3}</h1>
    </div>
    </>
  );
}
export default UpdateObjectState;



