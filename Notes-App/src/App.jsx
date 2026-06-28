import React, { useState } from 'react';
const App = () => {
  const [Head, setHead] = useState('');
  const [details, setDetails] = useState('');
  const [notes, setNotes] = useState([])
  function submitHandler(e) {
    e.preventDefault()
    const copyNotes =[...notes];
    copyNotes.push({Head,details})
    setNotes(copyNotes);
    setHead('');
    setDetails('');
  }
  function NotesHead(elem){
    setHead(elem.target.value);
  }
  function detailsHandler(elem){
    setDetails(elem.target.value);
  }
  function deleteNote(idx){
    const copyNotes = [...notes];
    copyNotes.splice(idx,1);
    setNotes(copyNotes);
  }
	return (
		<div className="h-screen w-screen bg-black text-white lg:flex font-mono">
			<div className="h-screen lg:w-1/2 bg-amber-500">
        <form
          onSubmit={submitHandler}
          className="p-10 pt-4 my-20 mx-10 max-h-full flex flex-col justify-evenly items-center border-double border-2 border-gray rounded-xl"
        >
          <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
					<input
						type="text"
						placeholder="Enter the Note Title"
            value={Head}
						className="block w-full p-5 text-2xl border-2 rounded-2xl"
            onChange={(elem)=>{
              NotesHead(elem);
            }}
					/>
					<textarea placeholder="Enter your description" className='w-full h-50 my-10 border-2 border-dashed text-2xl p-2 active:border-black' id='msg' 
          value={details}
          onChange={(elem)=>{
            detailsHandler(elem);
          }}></textarea>
          <button type="submit" className='bg-white text-black w-full p-3 font-bold m-10 rounded-2xl cursor-pointer active:bg-gray-200 active:scale-95'>Add Note</button>
				</form>
			</div>
      <div className='lg:w-2/2 flex flex-col p-8 gap-5'>
      <div>
        <h1 className='text-4xl'>Recent Notes</h1>
      </div>
      <div className='flex flex-wrap overflow-auto gap-5 ml-10' id='cardScroll'>
        {notes.map((elem,idx)=>{
          return <div key={idx} className=" relative h-80 w-70 rounded-2xl text-black py-7 px-8  bg-cover bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg')]">
          <h3 className='p-2 text-2xl font-bold capitalize'>{elem.Head}</h3>
          <p className=' ml-1 mt-1 mb-1 flex flex-wrap leading-snug text-gray-500'>{elem.details}</p>
          <button onClick={()=>{
            deleteNote(idx);
          }} className='absolute bottom-3 bg-red-400 p-1 left-10 w-50 rounded active:scale-95'>Delete</button>
        </div>
        })}
      </div>
      </div>
		</div>
	);
};

export default App;
