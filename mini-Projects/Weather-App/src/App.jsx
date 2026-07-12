import Daydetails from './Components/Daydetails';
import Sidebar from './Components/Sidebar';
import Airconditions from './Components/Airconditions';
import Hero from './Components/Hero';
import Weatherforecast from './Components/Weatherforecast';

const App = () => {
	return (
		<main className="min-h-screen flex justify-center items-center">
			<div className="box w-[70%] h-screen bg-black overflow-hidden p-5 rounded-3xl">
				<Sidebar />
				<input
					type="text"
					className="search-bar bg-black w-full text-md rounded-md text-white px-1 py-2 mt-1"
					placeholder="Search for cities"
				/>
				<Hero />
				<Daydetails />
				<Airconditions />
				<Weatherforecast />
			</div>
		</main>
	);
};

export default App;
