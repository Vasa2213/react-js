const Genre = (props) => {
	return (
		<div className="">
			<button
				className="bg-gray-200 px-3 py-1 rounded-md whitespace-nowrap shrink-0"
				key={props.index}>
				{props.genre}
			</button>
		</div>
	);
};

export default Genre;
