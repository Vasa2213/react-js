import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Product = () => {
	return (
		<div>
			<div className="flex gap-6 m-2 justify-center">
				<Link
					className="bg-blue-600 py-2 px-4 rounded-md text-white active:scale-95"
					to={'men'}>
					Men
				</Link>
				<Link
					className="bg-blue-600 py-2 px-4 rounded-md text-white active:scale-95"
					to={'women'}>
					Women
				</Link>
			</div>
			<Outlet />
		</div>
	);
};

export default Product;
