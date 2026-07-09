import SidebarItem from './SidebarItem';
import {
	Home,
	PlaySquare,
	Bell,
	History,
	ListVideo,
	Clock,
	ThumbsUp,
	Flame,
	Music,
	Gamepad2,
} from 'lucide-react';
const Sidebar = ({ isSidebaropen, setisSidebaropen }) => {
	console.log(isSidebaropen);
	return (
		<aside className={`p-3 ${isSidebaropen ? 'w-50' : 'w-20'}`}>
			<div className="space-y-1">
				<SidebarItem
					icon={<Home />}
					text="Home"
					isSidebaropen={isSidebaropen}
				/>
				<SidebarItem
					icon={<PlaySquare />}
					text="Shorts"
					isSidebaropen={isSidebaropen}
				/>
				<SidebarItem
					icon={<Bell />}
					text="Subscriptions"
					isSidebaropen={isSidebaropen}
				/>
			</div>

			<hr className="my-3" />

			<h3 className="px-3 mb-2 text-sm font-semibold">You</h3>

			<div className="space-y-1">
				<SidebarItem
					icon={<History />}
					text="History"
					isSidebaropen={isSidebaropen}
				/>
				<SidebarItem
					icon={<Clock />}
					text="Watch Later"
					isSidebaropen={isSidebaropen}
				/>
			</div>
			<hr className="my-3" />

			<div title="Explore">
				<SidebarItem
					icon={<Flame />}
					text="Trending"
					isSidebaropen={isSidebaropen}
				/>
				<SidebarItem
					icon={<Music />}
					text="Music"
					isSidebaropen={isSidebaropen}
				/>
				<SidebarItem
					icon={<Gamepad2 />}
					text="Gaming"
					isSidebaropen={isSidebaropen}
				/>
			</div>
		</aside>
	);
};

export default Sidebar;
