import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
const SideNavBar = () => {

  // TODO add dynamic data for profile
  return (
    < >
      <div className="flex flex-col ml-8 gap-6 ">
        <Profile /> <Navbar />
      </div>
    </>
  );
};

export default SideNavBar;