import React from 'react';
import Dayforcastecard from './Dayforcastecard';
const Daydetails = () => {
	return (
		<div className="day-forcaste">
			<h2 className="text-lg px-2 font-semibold">Today's Forecast</h2>
			<div className="grid flex-1 grid-cols-6 gap-2 overflow-hidden">
				<Dayforcastecard />
				<Dayforcastecard />
				<Dayforcastecard />
				<Dayforcastecard />
				<Dayforcastecard />
				<Dayforcastecard />
			</div>
		</div>
	);
};

export default Daydetails;
