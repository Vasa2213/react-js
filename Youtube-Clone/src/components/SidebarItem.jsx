const SidebarItem = ({
	icon,
	text,
	active,
	isSidebaropen,
	setisSidebaropen,
}) => (
	<button
		className={`flex items-center gap-6 w-full px-3 py-2 rounded-xl transition-colors
      ${active ? 'bg-black font-semibold' : 'hover:bg-gray-100'}`}>
		{icon}
		<span
			className={`transition-opacity duration-200 ${
				isSidebaropen ? 'opacity-100' : 'hidden'
			}`}>
			{text}
		</span>
	</button>
);
export default SidebarItem;
