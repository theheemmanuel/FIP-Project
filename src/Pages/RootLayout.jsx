import Sidebar from "../Components/SideBar";
import Folder from "../Components/Folder";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ContextFile } from "../Components/FileContext";

import { ReactTyped } from "react-typed";

const RootLayout = () => {
  const [showTyped, setShowTyped] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowTyped(false);
    }, 3000);
  }, []);
  const { state } = useContext(ContextFile);
  return showTyped ? (
    <div className="flex justify-center items-center h-[100vh] bg-[#181818] font-inter">
      <ReactTyped
        className="text-white font-play text-4xl md:text-5xl font-bold"
        strings={["JotItDown"]}
        typeSpeed={70}
        backSpeed={80}
        loop
      />
    </div>
  ) : (
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
