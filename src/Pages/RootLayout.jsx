import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
import Folder from "../Components/Folder";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-[#181818] font-inter">
      <div className="flex">
        <Sidebar />
        <Folder />
        <div className="w-[60%] min-h-[100vh]">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
