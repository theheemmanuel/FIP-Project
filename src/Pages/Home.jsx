import { useContext } from "react";
import EmptyPic from "../assets/EmptyPic.png";
import { ContextFile } from "../Components/FileContext";
import date from "../assets/Date.png";
import folder from "../assets/Folder.png";
const Home = () => {
  const { notes, state } = useContext(ContextFile);
  return (
    <div className="h-fit sticky top-6 p-6">
      {state.note === "" ? (
        <div className="flex flex-col justify-center items-center min-h-[80vh] text-center">
          <img src={EmptyPic} alt="" />
          <h1 className="text-[28px] font-[600]">Select a note to view</h1>
          <p className="w-2/3">
            Choose a note from the list on the left to view its contents, or
            create a new note to add to your collection.
          </p>
        </div>
      ) : (
        notes
          .filter((note) => note.id === state.note)
          .map((note) => (
            <div key={note.id}>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-[600]">{note.title}</h1>
                <button className="bg-[#FFFFFF0D] px-4 py-2 rounded-lg text-sm font-bold">
                  Edit
                </button>
              </div>
              <div className="flex gap-4 mt-4 mb-2">
                <img src={date} alt="" />
                <p className="text-sm font-semibold text-[#FFFFFF99]">Date</p>
                <p className="text-sm">
                  {new Date(note.date).toLocaleDateString()}
                </p>
              </div>
              <hr />
              <div className="flex gap-4 mt-4 mb-2">
                <img src={folder} alt="" />
                <p className="text-sm font-semibold text-[#FFFFFF99]">Folder</p>
                <p className="text-sm">{note.folder}</p>
              </div>
              <hr />
              <p className="my-6">{note.body}</p>
            </div>
          ))
      )}
    </div>
  );
};

export default Home;
