import React from 'react';
import Weatherdetails from './Weatherdetails';

const Weatherforecast = () => {
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	return (
		<div className="week-forcaste p-5 text-white rounded-2xl ">
			<h2 className="uppercase font-semibold text-gray-400">7-day Forecast</h2>
			{days.map((elem, idx) => {
				return <Weatherdetails day={elem} idx={idx}/>;
			})}
			
		</div>
	);
};

export default Weatherforecast;
