import { useDispatch, useSelector } from 'react-redux';
import Collectiongrid from '../components/Collectiongrid';
import { clearCollection } from '../REDUX/features/collectionSlice';

const Collectionpage = () => {
	const dispatch = useDispatch();
	const collectionData = useSelector((state) => state.collection.items);
	return (
		<div className="p-3">
			<div className="flex justify-between items-center px-10">
				<h1 className="text-2xl font-semibold">Your Collection</h1>
				<button
					className=" bg-red-500 rounded text-white font-bold px-5 py-1 cursor-pointer active:scale-95"
					onClick={() => {
						dispatch(clearCollection);
					}}>
					Clear
				</button>
			</div>
			<div className="flex flex-wrap w-full h-[70%] overflow-auto px-2 py-10  gap-5 items-center">
				{collectionData.map((item, idx) => {
					return <Collectiongrid item={item} key={idx} />;
				})}
			</div>
		</div>
	);
};

export default Collectionpage;
