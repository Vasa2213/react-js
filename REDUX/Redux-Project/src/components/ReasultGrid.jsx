import React, { useEffect } from 'react';
import {
	setQuery,
	setLoading,
	setError,
	setResult,
} from '../REDUX/features/searchSlice';
import { fetchPhotos, fetchVideos, fetchGIF } from '../api/MediaApi';
import { useDispatch, useSelector } from 'react-redux';
import ResultCard from './ResultCard';
import Loader from './Loader';
const ReasultGrid = () => {
	const dispatch = useDispatch();
	const { query, activeTab, results, loading, error } = useSelector(
		(store) => store.search,
	);
	let data = [];
	const getData = async () => {
		if (!query) return;
		try {
			dispatch(setLoading());
			if (activeTab == 'photos') {
				const response = await fetchPhotos(query);
				data = response.results.map((item) => ({
					id: item.id,
					type: 'photo',
					title: item.alt_description,
					thumnail: item.urls.small,
					src: item.urls.full,
				}));
				if (!data) return;
			}
			if (activeTab == 'videos') {
				const response = await fetchVideos(query);
				data = response.hits.map((item) => ({
					id: item.video_id,
					type: 'video',
					title: item.title,
					thumbnail: item.thumbnail,
					src: item.urls.mp4,
					download: item.urls.mp4_download,
				}));
				if (!data) return;
			}
			if (activeTab == 'GIFs') {
				const response = await fetchGIF(query);
				data = response.data.data.map((item) => ({
					id: item.id,
					type: 'gif',
					title: item.title,
					src: item.file.hd.gif.url,
				}));
			}
		} catch (err) {
			dispatch(setError(err.message));
		}
		dispatch(setResult(data));
	};
	useEffect(() => {
		getData();
	}, [query, activeTab]);
	if (error) {
		return (
			<h1 className="h-screen w-full flex justify-center items-center text-5xl">
				Error
			</h1>
		);
	}
	if (loading) {
		return (
			<h1 className="h-screen w-full flex justify-center items-center text-5xl">
				<Loader />
			</h1>
		);
	}
	return (
		<div className="flex flex-wrap w-full h-[70%] gap-5 overflow-auto px-5 py-6">
			{results.map((item, idx) => {
				return (
					<div key={idx}>
						<ResultCard item={item} />
					</div>
				);
			})}
		</div>
	);
};
export default ReasultGrid;
