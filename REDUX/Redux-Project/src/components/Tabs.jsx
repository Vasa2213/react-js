import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../REDUX/features/searchSlice';

const Tabs = () => {
	const Tabs = ['photos', 'videos', 'GIFs'];
	const dispatch = useDispatch();
	const ActiveTab = useSelector((state) => state.search.activeTab);
	return (
		<div className="flex gap-10 px-5 py-2 text-(--c1)">
			{Tabs.map((elem, idx) => {
				return (
					<button
						key={idx}
						className={`${ActiveTab == elem ? 'bg-(--c4)' : 'bg-gray-500'} transition px-5 py-2 rounded capitalize cursor-pointer active:scale-95`}
						onClick={() => {
							dispatch(setActiveTab(elem));
						}}>
						{elem}
					</button>
				);
			})}
		</div>
	);
};

export default Tabs;
