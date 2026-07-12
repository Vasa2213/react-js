import React from 'react';

const Hero = () => {
	return (
		<div className="hero relative text-white rounded-2xl">
			<div className="ml-5">
				<h4 className="text-5xl my-5 font-bold">City</h4>
				<p className="text-lg">chance of rain 0%</p>
			</div>
			<h2 className="text-6xl absolute bottom-8 left-85">
				34<sup>°</sup>
			</h2>
			<img
				src="//cdn.weatherapi.com/weather/64x64/day/113.png"
				className="h-45 absolute top-2 right-10"
			/>
		</div>
	);
};

export default Hero;
