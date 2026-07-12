import React from 'react';

const Airconditionitem = ({ icon, head, value }) => {
	return (
		<div className="flex h-full min-h-0 items-center gap-3 rounded-2xl bg-yellow-300 p-4">
			{icon}
			<h1>
				<p className="text-lg font-semibold">{head}</p>
				<span className="font-bold text-3xl">{value}</span>
			</h1>
		</div>
	);
};

export default Airconditionitem;
