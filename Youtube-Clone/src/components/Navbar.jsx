const Navbar = () => {
  return (
    <div className="w-full  flex justify-between items-center">
      <div className="flex text-medium items-center px-5">
        <i class="ri-align-justify mr-5 text-2xl hover:bg-amber-100 duration-1000 rounded-ful"></i>
        <i class="ri-youtube-fill text-red-700 text-3xl"></i>
        <h4 className="font-bold text-1xl">
          YouTube<sup className="text-xs font-medium">IN</sup>
        </h4>
      </div>
      <div className="flex  items-center px-5 gap-5">
        <form className="flex border-2 rounded-full border-gray-200 w-2xl justify-between px-3 py-2">
          <input
            type="text"
            className="w-full outline-0"
            placeholder="Search"
          />
          <button className="h-8 w-8 bg-gray-300 rounded-full px-2 py-3 flex items-center">
            <i className="ri-search-line"></i>
          </button>
        </form>
        <button className="bg-gray-200 w-10 h-10 rounded-full">
          <i className="ri-mic-line"></i>
        </button>
      </div>
      <div className="flex justify-between items-center gap-8 p-5">
        <button className="font-medium bg-gray-300 px-2 py-2 rounded-full">
          <i className="ri-add-line"></i>Create
        </button>
        <button className="text-2xl">
          <i className="ri-notification-line"></i>
        </button>
        <img
          src="https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
