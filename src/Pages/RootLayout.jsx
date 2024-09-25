import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
import Folder from "../Components/Folder";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
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
