import React from 'react';

const Pagination = (props) => {
	return (
		<div className="flex gap-6 items-center justify-center">
			<button
				className={`bg-blue-500 py-1 px-3 rounded-md ${props.index === 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'} text-md active:scale-95`}
				onClick={() => {
					if (props.index > 1) {
						props.setIndex(props.index - 1);
						props.setuserData([]);
					}
				}}>
				Prev
			</button>
			<h3>Page{props.index}</h3>
			<button
				className="bg-blue-500 py-1 px-3 rounded-md text-md active:scale-95"
				onClick={() => {
					props.setIndex(props.index + 1);
					props.setuserData([]);
				}}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
