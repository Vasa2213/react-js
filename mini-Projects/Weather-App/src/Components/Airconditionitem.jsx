import React from 'react';

const Airconditionitem = ({ icon, head, value, unit }) => {
	return (
		<div className="flex h-full min-h-0 items-center gap-3 rounded-2xl p-4">
			{icon}
			<h1>
				<p className="text-lg font-semibold">{head}</p>
				<span className="font-bold text-3xl">{value}</span>
				<span className="font-bold text-3xl ml-2">{unit}</span>
			</h1>
		</div>
	);
};

export default Airconditionitem;
