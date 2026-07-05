import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Product from '../pages/Product';
import Men from '../pages/Men';
import Women from '../pages/Women';

const PageContent = () => {
	return (
		<div className="h-full bg-red-50 text-black">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Product />}>
					<Route path="men" element={<Men />} />
					<Route path="women" element={<Women />} />
				</Route>
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
};

export default PageContent;
