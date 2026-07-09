import React from 'react';
import VideoDetails from './VideoDetails';

const Videodata = (props) => {
	return (
		<div className="flex justify-between mt-1 gap-3">
			<img src={props.pp} className="h-10 w-10 ml-4 rounded-full" />
			<VideoDetails
				title={props.title}
				cname={props.cname}
				vtime={props.vtime}
				views={props.views}
				utime={props.utime}
			/>
			<button className="h-8 w-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
				<i className="ri-more-2-line"></i>
			</button>
		</div>
	);
};

export default Videodata;
