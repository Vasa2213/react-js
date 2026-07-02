import React from 'react';

const Grid = (props) => {
	return (
		<div className="p-5 flex flex-wrap gap-4 h-full justify-center items-center overflow-auto">
			{props.printUserData}
		</div>
	);
};

export default Grid;
