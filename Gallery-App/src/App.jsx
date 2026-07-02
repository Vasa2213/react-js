import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from './components/Grid';
import Pagination from './components/Pagination';
const App = () => {
	const [userdata, setuserData] = useState([]);
	const [index, setIndex] = useState(1);
	const getData = async () => {
		const { data } = await axios.get(
			`https://picsum.photos/v2/list?page=${index}&limit=10`,
		);
		setuserData(data);
	};
	useEffect(
		function () {
			getData();
		},
		[index],
	);

	let printUserData = 'Loading...';
	if (userdata.length > 0) {
		printUserData = userdata.map((elem, idx) => {
			return (
				<div key={idx}>
					<div className="h-40 w-44 rounded-2xl overflow-hidden">
						<img
							src={elem.download_url}
							className="h-full w-full object-cover"></img>
					</div>
					<h2 className="text-lg font-bold">{elem.author}</h2>
				</div>
			);
		});
	}
	return (
		<div className="bg-black text-white h-screen p-2 overflow-auto flex flex-col gap-3">
			<Grid printUserData={printUserData} />
			<Pagination
				userdata={userdata}
				index={index}
				setIndex={setIndex}
				setuserData={setuserData}
			/>
		</div>
	);
};
export default App;
