import React, { useState } from 'react'

const StatesAdv = () => {
  const [user, setUser] = useState({Name:"Vansh",Age:21})
  const [arr, setarr] = useState([10,20,30])
  function update(){
    const newObj ={...user};
    let newArr = [...arr];
    newArr.push(22);
    console.log(newArr);  
    newObj.Name="Vandan";
    newObj.Age=20; 
    setUser(newObj);
    setarr(newArr);   
  }
  return (
    <div>
      <h1>{user.Name},{user.Age}</h1>
      <h1>{arr}</h1>
      <button onClick={update}>click</button>
    </div>
  )
}

export default StatesAdv