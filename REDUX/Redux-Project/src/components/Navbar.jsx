import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="w-full bg-(--c2) flex justify-between items-center px-10 py-5">
			<Link to="/">
				<h1 className="text-2xl">MediaSearch</h1>
			</Link>
			<div className="flex gap-10 text-(--c1)">
				<Link to="/" className="cursor-pointer bg-(--c4) px-3 py-2 rounded ">
					Search
				</Link>
				<Link
					to="/collection"
					className="cursor-pointer bg-(--c4) px-3 py-2 rounded ">
					My Collection
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
