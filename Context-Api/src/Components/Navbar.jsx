import Nav2 from './Nav2';

const Navbar = (props) => {
	return (
		<div className="bg-cyan-500 flex justify-between p-5 items-center font-bold">
			<h2 className="text-2xl">Cykodex</h2>
			<Nav2 theame={props.theame} setTheame={props.setTheame} />
		</div>
	);
};

export default Navbar;
