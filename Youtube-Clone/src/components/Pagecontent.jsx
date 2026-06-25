import Rightcontent from "./Rightcontent";
import Sidebar from "./Sidebar";
const Pagecontent = (props) => {
  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <Rightcontent geners={props.geners} content={props.content}/>
    </div>
  );
};

export default Pagecontent;
