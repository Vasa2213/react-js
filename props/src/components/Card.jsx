const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img}></img>
      <h2>{props.name}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      <button>View Profile</button>
    </div>
  );
};
export default Card;
