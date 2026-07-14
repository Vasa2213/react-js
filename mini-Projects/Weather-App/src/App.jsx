import Daydetails from './Components/Daydetails';
import Sidebar from './Components/Sidebar';
import Airconditions from './Components/Airconditions';
import Hero from './Components/Hero';
import Weatherforecast from './Components/Weatherforecast';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Type } from 'lucide-react';

const App = () => {
	const [search, setSearch] = useState('Anand');
	const [data, setData] = useState({});
	const [error, setError] = useState('');
	const submitHandler = async () => {
		try {
			const response = await fetch(
				`https://api.weatherapi.com/v1/forecast.json?key=48dc32d597a7499c922131312262002&q=${search}&days=7&aqi=yes&alerts=no`,
			);
			if (!response.ok) {
				throw new Error('Uable to fetch data!!');
			}
			setData(await response.json());
		} catch (error) {
			setError(error.message);
		}
	};
	useEffect(() => {
		submitHandler();
	}, []);
	return (
		<main className="min-h-screen flex justify-center items-center">
			<div className="box w-[70%] h-screen bg-black overflow-hidden p-5 rounded-3xl">
				<Sidebar />
				<input
					type="text"
					className="search-bar bg-black w-full text-md rounded-md text-white px-1 py-2 mt-1"
					placeholder="Search for cities"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							submitHandler();
						}
					}}
				/>
				<Hero data={data} error={error} />
				<Daydetails data={data} />
				<Airconditions data={data} />
				<Weatherforecast data={data} />
			</div>
		</main>
	);
};

export default App;
