import Sidebar from './Components/Sidebar';

const App = () => {
	return (
		<main className="h-screen flex justify-center items-center">
			<div className="container">
				<Sidebar />
				<div className="search-bar">
					<input
						type="text"
						className="bg-black w-full text-2xl rounded-md text-white px-2 py-1"
						placeholder="Search for cities"
					/>
				</div>
				<div className="hero flex relative">
					<div className="ml-5">
						<h4 className="text-6xl mb-5 font-bold">City</h4>
						<p className=''>chance of rain 0%</p>
					</div>
					<img
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN1bi1pY29uIGx1Y2lkZS1zdW4iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjQiLz48cGF0aCBkPSJNMTIgMnYyIi8+PHBhdGggZD0iTTEyIDIwdjIiLz48cGF0aCBkPSJtNC45MyA0LjkzIDEuNDEgMS40MSIvPjxwYXRoIGQ9Im0xNy42NiAxNy42NiAxLjQxIDEuNDEiLz48cGF0aCBkPSJNMiAxMmgyIi8+PHBhdGggZD0iTTIwIDEyaDIiLz48cGF0aCBkPSJtNi4zNCAxNy42Ni0xLjQxIDEuNDEiLz48cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiLz48L3N2Zz4="
						className="h-40 absolute top-8 right-30"
					/>
				</div>
				<div className="day-forcaste"></div>
				<div className="air-conditions"></div>
				<div className="week-forcaste">hi</div>
			</div>
		</main>
	);
};

export default App;
