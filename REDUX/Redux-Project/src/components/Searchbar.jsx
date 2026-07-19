import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../REDUX/features/searchSlice';

const Searchbar = () => {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	function submitHandler(e) {
		e.preventDefault();
		dispatch(setQuery(text));
		setText('');
	}
	return (
		<div>
			<form
				className="flex bg-(--c1) gap-10 p-5"
				onSubmit={(e) => {
					submitHandler(e);
				}}>
				<input
					required
					type="text"
					name=""
					id=""
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
					placeholder="Search Anything"
					className="w-full border border-white text-2xl rounded outline-none px-2"
				/>
				<button className="active:scale-95 bg-(--c3) border border-white text-2xl rounded outline-none cursor-pointer px-5 py-2 text-(--c1)">
					Search
				</button>
			</form>
		</div>
	);
};

export default Searchbar;
