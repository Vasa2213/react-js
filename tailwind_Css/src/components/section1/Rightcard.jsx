import Rightcardcontent from "./Rightcardcontent";

const Rightcard = (props) => {
  return (
    <div className="relative h-full w-70 bg-red-200 rounded-4xl overflow-hidden shrink-0">
      <img
        src={props.img}
        alt="bgimage"
        className="h-full w-full object-cover"
      />
      <Rightcardcontent tag={props.tag} color={props.color} id={props.id} />
    </div>
  );
};

export default Rightcard;
