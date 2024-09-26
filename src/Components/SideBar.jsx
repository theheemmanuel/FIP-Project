import { useContext } from "react";
import FolderPic from "../assets/Folder.png";
import NotePic from "../assets/Note.png";
import { ContextFile } from "./FileContext";

const SideBar = () => {
  const { allNotes, state, dispatch } = useContext(ContextFile);
  const uniqueFolders = new Set(allNotes.map((item) => item.folder));
  const recentNotes = allNotes
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="w-1/2 min-h-[100vh] px-4 py-6">
      <div className="h-fit sticky top-6">
        <h1 className="font-play text-xl font-bold">JotItDown 🖊</h1>

        <hr className="h-[1px] bg-gray-700 my-4" />
        <button
          onClick={() => dispatch({ type: "newNote" })}
          className="w-full bg-[#FFFFFF0D] py-2 font-bold rounded-lg"
        >
          + New Note
        </button>
        <div className="mt-4">
          <p className="text-sm">Recently Added</p>
          <hr />
          {recentNotes.map((note) => (
            <div
              onClick={() => dispatch({ type: "recentNote", payload: note })}
              key={note.id}
              className="flex items-center mt-2 gap-3 hover:bg-[#ffffff0D] hover:font-semibold rounded-lg p-2 cursor-pointer"
            >
              <img src={NotePic} className="w-5" alt="" />
              <p className="text-sm">{note.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm">Folders</p>
            <img src={FolderPic} className="w-5" alt="" />
          </div>
          <hr />
          {Array.from(uniqueFolders)
            .sort((a, b) => a.localeCompare(b))
            .map((folder) => (
              <div
                onClick={() =>
                  dispatch({ type: "PickFolder", payload: folder })
                }
                key={folder}
                className={`flex items-center capitalize mt-2 gap-3 hover:bg-[#ffffff0D] hover:font-semibold rounded-lg p-2 cursor-pointer ${
                  state.folder === folder && "bg-[#ffffff0D]"
                }`}
              >
                <img src={FolderPic} className="w-5" alt="" />
                <p className="text-sm">{folder}</p>
              </div>
            ))}

          <div
            onClick={() => dispatch({ type: "PickFolder", payload: "" })}
            className={`flex items-center mt-2 gap-3 hover:bg-[#ffffff0D] hover:font-semibold rounded-lg p-2 cursor-pointer ${
              state.folder === "" && "bg-[#ffffff0D]"
            }`}
          >
            <img src={FolderPic} className="w-5" alt="" />
            <p className="text-sm">All</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
