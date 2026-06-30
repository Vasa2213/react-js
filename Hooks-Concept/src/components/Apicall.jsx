import React, { useState } from 'react'
import axios from "axios";
const Apicall = () => {
    const [res, setRes] = useState([])
     async function getData(){
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setRes(data);
        console.log(res);
      }
  return (
    <div>
        <h2>API Calling</h2>
      <hr></hr>
      <button onClick={getData}>Get Data</button>
      <div>
        {res.map((elem,idx)=>{
          return <h3 key={idx}>Name:{elem.username},email:{elem.email}</h3>
        })}
      </div>
    </div>
  )
}

export default Apicall