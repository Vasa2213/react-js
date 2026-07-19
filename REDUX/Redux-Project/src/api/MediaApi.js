import axios from 'axios';
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const COVER_KEY = import.meta.env.VITE_COVER_KEY;
const GIF_KEY = import.meta.env.VITE_GIFY_KEY;
export async function fetchPhotos(query, page = 1, per_page = 20) {
	const res = await axios.get('https://api.unsplash.com/search/photos', {
		params: { query, page, per_page },
		headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
	});
	return res.data;
}
export async function fetchVideos(query, page = 1, per_page = 20, urls = true) {
	const res = await axios.get('https://api.coverr.co/videos', {
		params: { query, page, per_page, urls },
		headers: { Authorization: `Bearer ${COVER_KEY}` },
	});
	return res.data;
}
export async function fetchGIF(q, page = 1, per_page = 20) {
	const res = await axios.get(
		`https://api.klipy.com/api/v1/${GIF_KEY}/gifs/search`,
		{
			params: { q, page, per_page },
		},
	);
	return res.data;
}
