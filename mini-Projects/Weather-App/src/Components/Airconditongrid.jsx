import { Thermometer, WindArrowDown } from 'lucide-react';
import Airconditionitem from './Airconditionitem';
const Airconditongrid = ({ data }) => {
	if (!data || !data.location) {
		return (
			<h1 className="hero h-64 flex items-center justify-center text-white">
				Loading...
			</h1>
		);
	}
	return (
		<div className="overflow-x-scroll" id="air-items">
			<div className="grid flex-1 grid-cols-2 grid-rows-2 gap-3 px-4 pb-4">
				<Airconditionitem
					icon={<Thermometer />}
					head={'Real Feel'}
					value={'30'}
					unit={'h'}
				/>
				<Airconditionitem
					icon={<WindArrowDown />}
					head={'Wind'}
					value={data.current.wind_kph}
					unit={'km/h'}
				/>
				<Airconditionitem
					icon={<Thermometer />}
					head={'Real Feel'}
					value={30}
					unit={'km/h'}
				/>
				<Airconditionitem
					icon={<Thermometer />}
					head={'Real Feel'}
					value={30}
					unit={'km/h'}
				/>
			</div>
		</div>
	);
};

export default Airconditongrid;
