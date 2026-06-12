import { Bookmark } from "lucide-react";

function Card(props) {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.logo} alt="companylogo" />
          <button>
            save
            <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company}
            <span>5 days ago</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.jobType}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.salary}/Hr</h3>
          <p>{props.place}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
}
export default Card;
