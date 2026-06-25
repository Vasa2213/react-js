const Sidebar = () => {
  return (
    <div className="w-1/22">
      <div className="flex flex-col text-3xl gap-6 items-center mt-10">
        <i class="ri-home-line">
          <p className="text-sm font-medium">Home</p>
        </i>
        <i class="ri-video-line">
          <p className="text-sm font-medium">Shorts</p>
        </i>
        <i class="ri-cloud-fill">
          <p className="text-sm font-medium">Join</p>
        </i>
        <i class="ri-user-line">
          <p className="text-sm font-medium">You</p>
        </i>
      </div>
    </div>
  );
};

export default Sidebar;
