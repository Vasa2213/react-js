import React from 'react';

const Sidebaritem = ({ icon, name }) => {
	return (
		<div className="active:bg-gray-500 active:text-black transition-colors hover:bg-gray-500 px-2 py-2 cursor-pointer rounded-2xl">
			{icon}
		</div>
	);
};

export default Sidebaritem;
