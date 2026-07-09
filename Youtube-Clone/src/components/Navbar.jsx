const Navbar = ({ isSidebaropen, setisSidebaropen }) => {
	return (
		<div className="w-full flex flex-wrap items-center justify-between gap-4 px-3">
			<div className="flex shrink-0 items-center text-medium">
				<button
					class="ri-align-justify px-3 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200 text-2xl"
					onClick={() => {
						setisSidebaropen(!isSidebaropen);
					}}></button>
				<i class="ri-youtube-fill text-red-700 text-3xl ml-4"></i>
				<h4 className="font-bold text-1xl">
					YouTube<sup className="text-xs font-medium">IN</sup>
				</h4>
			</div>
			<div className="flex w-full flex-1 min-w-0 items-center justify-center gap-4 px-0 sm:px-5">
				<form className="flex w-full max-w-2xl min-w-0 justify-between rounded-full border-2 border-gray-200 px-3 py-2">
					<input
						type="text"
						className="w-full outline-0"
						placeholder="Search"
					/>
					<button className="h-8 w-8 bg-gray-300 rounded-full px-2 py-3 flex items-center">
						<i className="ri-search-line"></i>
					</button>
				</form>
				<button className="bg-gray-200 w-10 h-10 rounded-full">
					<i className="ri-mic-line"></i>
				</button>
			</div>
			<div className="flex shrink-0 items-center justify-between gap-8 p-5">
				<button className="font-medium bg-gray-300 px-2 py-2 rounded-full">
					<i className="ri-add-line"></i>Create
				</button>
				<button className="text-2xl">
					<i className="ri-notification-line"></i>
				</button>
				<img
					src="https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					className="h-10 w-10 rounded-full"
				/>
			</div>
		</div>
	);
};

export default Navbar;
