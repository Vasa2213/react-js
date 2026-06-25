const Genre = (props) => {
  return (
    <div className="">
    <button className="bg-gray-200 px-3 py-1 mx-2 my-2  rounded-md flex whitespace-nowrap items-center w-fit h-fit">
      {props.genre}
    </button>
    </div>
  );
};

export default Genre;
