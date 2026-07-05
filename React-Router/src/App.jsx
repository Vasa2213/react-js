import React from 'react';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className="h-screen bg-black text-white flex flex-col justify-between">
			<Navbar />
			<PageContent />
			<Footer />
		</div>
	);
};

export default App;
