import React from 'react';

const Weatherdetails = ({ day, weather, icon ,idx}) => {
	return (
		<div className="flex justify-between items-center px-2 mt-3 border-b border-gray-300" key={idx}>
			<p className="font-semibold text-gray-400">{day}</p>
			<div className="flex items-center">
				<img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="icon" />
				<p className="font-bold">Sunny</p>
			</div>
			<h4>
				<span className="font-semibold">36</span>/22
			</h4>
		</div>
	);
};

export default Weatherdetails;
