import React from 'react';

const Nav2 = (props) => {
	return (
		<div className="flex  gap-6 font-bold text-2xl text-white">
			<h4>Home</h4>
			<h4>About</h4>
			<h4>Contact</h4>
			<h4>Services</h4>
			<h4>{props.theame}</h4>
		</div>
	);
};

export default Nav2;
