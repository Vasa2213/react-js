import Videocontent from './Videocontent'
const Mainsection = (props) => {
  return (
    <div className='flex flex-wrap'>
      {props.content.map(function(elem){
        return <Videocontent className="basis-1/3"title={elem.videoTitle} cname={elem.channelName} vtime={elem.videoTime}  views={elem.views} utime={elem.uploadedTime} thumbnail={elem.thumbnail} pp={elem.profile}/>
      })}  
    </div>
  )
}

export default Mainsection