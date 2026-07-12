import React from 'react';
import Sidebaritem from './Sidebaritem';
import { Wind, CloudSun, Map, List, Settings } from 'lucide-react';

const Sidebar = () => {
	return (
		<div className="sidebar text-white flex flex-col justify-evenly items-center rounded-2xl">
			<div>
				<Wind className="bg-blue-400 px-2 py-2 cursor-pointer rounded-2xl h-10 w-10" />
			</div>
			<div className="flex flex-col gap-10 justify-center items-center">
				<Sidebaritem icon={<CloudSun />} />
				<Sidebaritem icon={<List />} />
				<Sidebaritem icon={<Map />} />
				<Sidebaritem icon={<Settings />} />
			</div>
		</div>
	);
};

export default Sidebar;
