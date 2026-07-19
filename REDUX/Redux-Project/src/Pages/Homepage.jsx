import { useSelector } from 'react-redux';
import ReasultGrid from '../components/ReasultGrid';
import Searchbar from '../components/Searchbar';
import Tabs from '../components/Tabs';
const Homepage = () => {
	const { query } = useSelector((store) => store.search);
	return (
		<div>
			<Searchbar />
			{query ? (
				<div>
					<Tabs />
					<ReasultGrid />
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Homepage;
