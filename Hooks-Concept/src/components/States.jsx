import React, { useState } from 'react'
const States = () => {
    const [num, setNum] = useState(0)
    function increment(){
    setNum(num+1);}
  function decrement(){
    setNum(num-1);
  }
  function increment5(){
    setNum(num+5);
  }
  return (
     <div>
      <h1>{num}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment5}>Increment 5</button>
    </div>
  )
}

export default States