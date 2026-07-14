import React, { useState } from 'react';

const Hero = ({ data, error }) => {
	if (!error == '') {
		return (
			<h1 className="hero h-64 flex items-center justify-center text-white">
				{error}
			</h1>
		);
	}
	if (!data || !data.location) {
		return (
			<h1 className="hero h-64 flex items-center justify-center text-white">
				Loading...
			</h1>
		);
	}
	return (
		<div className="hero relative text-white rounded-2xl">
			<div className="ml-5">
				<h4 className="text-5xl my-5 font-bold">{data.location.name}</h4>
				<p className="text-lg">chance of rain {data.current.chance_of_rain}%</p>
			</div>
			<h2 className="text-6xl absolute bottom-8 left-70">
				{data.current.temp_c}
				<sup>°</sup>
			</h2>
			<img
				src={data.current.condition.icon}
				className="h-45 absolute top-2 right-10"
			/>
		</div>
	);
};

export default Hero;
