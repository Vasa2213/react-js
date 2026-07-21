import { Route, Routes } from 'react-router-dom';
import { fetchPhotos } from './api/MediaApi';
import Homepage from './Pages/Homepage';
import Collectionpage from './Pages/Collectionpage';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
	return (
		<div className="bg-gray-950 w-full min-h-screen text-white">
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/collection" element={<Collectionpage />}></Route>
			</Routes>
			<ToastContainer />
		</div>
	);
};

export default App;
