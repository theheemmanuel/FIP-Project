import FolderPic from "../assets/Folder.png";
import NotePic from "../assets/Note.png";

const SideBar = () => {
  return (
    <div className="w-[20%] min-h-[100vh] bg-[#181818] px-4 py-6">
      <h1 className="font-play text-xl font-bold">JotItDown 🖊</h1>

      <hr className="h-[1px] bg-gray-700 my-4" />
      <button className="w-full bg-[#FFFFFF0D] py-2 font-bold rounded-lg">
        + New Note
      </button>
      <div className="mt-4">
        <p className="text-sm">Recently Added</p>
        <hr />
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex items-center mt-2 gap-3 hover:bg-[#ffffff0D] hover:font-semibold rounded-lg p-2 cursor-pointer"
          >
            <img src={NotePic} className="w-5" alt="" />
            <p className="text-sm">Note {item}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm">Folders</p>
          <img src={FolderPic} className="w-5" alt="" />
        </div>
        <hr />
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="flex items-center mt-2 gap-3 hover:bg-[#ffffff0D] hover:font-semibold rounded-lg p-2 cursor-pointer"
          >
            <img src={FolderPic} className="w-5" alt="" />
            <p className="text-sm">Folder {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
