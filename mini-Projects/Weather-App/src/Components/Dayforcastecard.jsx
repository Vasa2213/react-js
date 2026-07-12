import React from 'react';

const Dayforcastecard = () => {
	return (
		<div className="h-full min-w-0 flex flex-col items-center justify-evenly border-r border-r-gray-50 px-2 text-center last:border-r-0">
			<p className="font-semibold text-gray-400">6:00 AM</p>
			<img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="icon" />
			<h2 className="text-lg font-bold">
				25<sup>°</sup>
			</h2>
		</div>
	);
};

export default Dayforcastecard;
