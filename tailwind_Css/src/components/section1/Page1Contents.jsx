import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const Page1Contents = (props) => {
  return (
    <div className="flex justify-between h-[90vh]  py-10 px-10 gap-10">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Contents;
