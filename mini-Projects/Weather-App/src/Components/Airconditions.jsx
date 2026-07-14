import Airconditongrid from './Airconditongrid';
const Airconditions = ({data}) => {
	return (
		<div className="air-conditions">
			<div className="flex justify-between px-5 text-lg mb-2">
				<h2 className="uppercase">Air Conditions</h2>
				<button className="bg-blue-600 px-2 rounded-2xl cursor-pointer">
					See more
				</button>
			</div>
			<Airconditongrid data={data}/>
		</div>
	);
};

export default Airconditions;
