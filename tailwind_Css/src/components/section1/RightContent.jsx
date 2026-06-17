import React from "react";
import Rightcard from "./Rightcard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="w-2/3 p-6 flex flex-nowrap gap-10 overflow-scroll"
    >
      {props.users.map(function (elem, idx) {
        return (
          <Rightcard
            key={idx}
            id={idx}
            img={elem.img}
            color={elem.color}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
