import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<div className="flex justify-around px-8 py-4 items-center bg-cyan-500">
			<h2 className="text-2xl font-bold">Cykodex</h2>
			<div>
				<div className="flex gap-6 font-bold text-lg">
					<Link to={'/'} className="hover:text-black cursor-pointer">
						Home
					</Link>
					<Link to={'/products'} className="hover:text-black cursor-pointer">
						Product
					</Link>
					<Link to={'/about'} className="hover:text-black cursor-pointer">
						About
					</Link>
					<Link to={'/contact'} className="hover:text-black cursor-pointer">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
