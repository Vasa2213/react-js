import { useState } from 'react';
import Navbar from './Components/Navbar';

const App = () => {
	const [theame, setTheame] = useState('Light');
	return (
		<div>
			<Navbar theame={theame} setTheame={setTheame} />
		</div>
	);
};

export default App;
