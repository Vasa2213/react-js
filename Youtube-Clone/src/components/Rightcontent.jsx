import React from "react";
import Genre from "./Genre";
import Videocontent from "./Videocontent";
import Mainsection from "./Mainsection";

const Rightcontent = (props) => {
  return (    
    <div className="w-21/22 flex flex-col h-full">
      <div className="flex overflow-x-auto overflow-y-hidden h-full items-center" id="over">
        <button className="bg-gray-200 px-3 py-1 mx-2 my-2 items-center rounded-md h-fit active:bg-black active:text-white">
          All</button>
        {props.geners.map(function(elem){
        return <Genre genre={elem.genre}/>;
      })}</div>   
      <div>
        <Mainsection content={props.content}/>
      </div>
      </div>
  );
};

export default Rightcontent;
