import React, { useState } from 'react'
function submitHandler(e){
    e.preventDefault();
}
const Formhandling = () => {
    const [title, settitle] = useState('')
  return (
    <div>
     <form onSubmit={(e)=>{
        submitHandler(e);
        settitle('');
     }}>
        <input type='text' placeholder='Enter Your Name'  value={title}onChange={(e)=>{
            settitle(e.target.value);
        }}/>
        <button type="submit" className="btn btn-primary">Submit</button>
     </form>
    </div>
  )
}

export default Formhandling