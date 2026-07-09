import Rightcontent from './Rightcontent';
import Sidebar from './Sidebar';
const Pagecontent = (props) => {
	return (
		<div className="h-screen w-full flex overflow-x-hidden" id="over">
			<Sidebar
				isSidebaropen={props.isSidebaropen}
				setisSidebaropen={props.setisSidebaropen}
			/>
			<Rightcontent
				geners={props.geners}
				content={props.content}
				isSidebaropen={props.isSidebaropen}
				setisSidebaropen={props.setisSidebaropen}
			/>
		</div>
	);
};

export default Pagecontent;
