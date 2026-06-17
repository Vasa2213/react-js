import Navbar from "./Navbar";
import Page1Contents from "./Page1Contents";
const Section1 = (props) => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page1Contents users={props.users} />
    </div>
  );
};

export default Section1;
