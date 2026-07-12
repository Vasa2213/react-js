import { Thermometer } from 'lucide-react';
import Airconditionitem from './Airconditionitem';
const Airconditongrid = () => {
	return (
		<div className="overflow-x-scroll" id='air-items'>
			<div className="grid flex-1 grid-cols-2 grid-rows-2 gap-3 px-4 pb-4">
				<Airconditionitem
					icon={<Thermometer />}
					head={'Real Feel'}
					value={30}
				/>
				<Airconditionitem
					icon={<Thermometer />}
					head={'Real Feel'}
					value={30}
				/>
				<Airconditionitem
					icon={<Thermometer />}
					head={'Real Feel'}
					value={30}
				/>
				<Airconditionitem
					icon={<Thermometer />}
					head={'Real Feel'}
					value={30}
				/>
			</div>
		</div>
	);
};

export default Airconditongrid;
