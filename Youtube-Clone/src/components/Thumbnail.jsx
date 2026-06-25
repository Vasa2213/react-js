const Thumbnail = (props) => {
  return (
            <div className=' relative p-1 h-60'>
          <img src={props.thumbnail} className='rounded-xl object-cover w-full h-full'/>
        <div className='absolute bottom-3 right-3 h-4  bg-black text-white px-1 text-xs opacity-75 rounded-md'>{props.vtime}</div>
        </div>
  )
}

export default Thumbnail