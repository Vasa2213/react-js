import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCollection } from '../REDUX/features/collectionSlice';
const Collectiongrid = ({ item }) => {
	const { loading } = useSelector((store) => store.search);
	const collection = useSelector((state) => state.collection.items);
	const dispatch = useDispatch();
	const removeFromCollection = (item) => {
		dispatch(removeCollection(item.id));
	};
	return (
		<div className="w-[18vw] h-80  rounded-3xl  relative overflow-hidden">
			<div className="w-full h-full">
				{item.type == 'photo' ? (
					loading ? (
						<Loader />
					) : (
						<img
							src={item.src}
							className="w-full h-full object-cover object-center rounded-3xl"
						/>
					)
				) : (
					''
				)}
				{item.type == 'video' ? (
					loading ? (
						<Loader />
					) : (
						<video
							autoPlay
							loop
							muted
							src={item.src}
							className="w-full h-full object-cover object-center"></video>
					)
				) : (
					''
				)}
				{item.type == 'gif' ? (
					<img
						src={item.src}
						className="w-full h-full object-cover object-center"
					/>
				) : (
					''
				)}
			</div>
			<div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl absolute bottom-0 flex h-[35%] w-full justify-between items-center px-2 gap-4">
				<h1 className="text-bold text-md capitalize">{item.title}</h1>
				<button
					className="bg-(--c3) px-3 py-2 rounded cursor-pointer active:scale-95 text-(--c1)"
					onClick={() => {
						removeFromCollection(item);
					}}>
					Remove
				</button>
			</div>
		</div>
	);
};

export default Collectiongrid;
