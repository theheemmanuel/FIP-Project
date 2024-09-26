import Sidebar from "../Components/SideBar";
import Folder from "../Components/Folder";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextFile } from "../Components/FileContext";

const RootLayout = () => {
  const { state } = useContext(ContextFile);
  return (
    <div className="bg-[#181818] font-inter">
      <div className="flex">
        <div
          className={`flex md:w-[40%] w-[100%] ${
            state.fullScreen && "max-md:hidden"
          }`}
        >
          <Sidebar />
          <Folder />
        </div>
        <div
          className={`md:w-[60%] min-h-[100vh] w-[100%] ${
            !state.fullScreen && "max-md:hidden"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
