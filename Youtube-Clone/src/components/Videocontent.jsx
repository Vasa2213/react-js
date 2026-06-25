import React from 'react'
import Thumbnail from './Thumbnail'
import Videodata from './Videodata'

const Videocontent = (props) => {
  return (
      <div className =' rounded-xl w-120 cursor-pointer p-2 mt-2 transition-all duration-300 hover:bg-gray-100'>
        <Thumbnail thumbnail={props.thumbnail} vtime={props.vtime}/>
        <Videodata title={props.title} cname={props.cname}   views={props.views} utime={props.utime} pp={props.pp}/>
        
      </div>
  )
}

export default Videocontent