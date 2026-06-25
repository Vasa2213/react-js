const VideoDetails = (props) => {
  return (
    <div className='flex-1 min-w-0'>
            <h3 className='font-semibold line-clamp-2'>{props.title}</h3>
            <p className=' text-sm text-gray-500'>{props.cname}<i className="ri-check-line bg-gray-600 rounded-full text-white ml-1 text-xs p-0.5"></i></p>
            <p className='text-sm text-gray-500'>{props.views}.<span className='ml-2'>{props.utime}</span></p>
          </div>
  )
}

export default VideoDetails