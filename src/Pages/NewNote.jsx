import { useContext } from "react";
import { ContextFile } from "../Components/FileContext";
import { useState } from "react";

const NewNote = () => {
  const [title, setTitle] = useState("");
  const [folder, setFolder] = useState("each");
  const [note, setNote] = useState("");

  const validateForm = () => {
    if (title === "") {
      return false;
    }
    if (folder === "") {
      return false;
    }
    if (note === "") {
      return false;
    }
    return true;
  };

  const { dispatch, addNote } = useContext(ContextFile);

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newNote = {
        id: Date.now(),
        title,
        folder,
        date: Date(),
        body: note,
      };
      addNote(newNote);
      console.log("Note added:", newNote);
      setTitle("");
      setFolder("");
      setNote("");
      dispatch({ type: "addedNote", payload: newNote.id });
    }
  };

  return (
    <div>
      <div className=" pb-4 flex justify-between">
        <button
          onClick={() => dispatch({ type: "clearNote" })}
          className="bg-[#FFFFFF0D] px-4 py-2 rounded-lg text-sm font-bold"
        >
          &larr; GO BACK
        </button>
        <h1 className="font-play text-xl font-bold">JotItDown 🖊</h1>
      </div>
      <div className="bg-[#FFFFFF0D] p-6">
        <h1 className="text-2xl font-[600] mb-4">New Note</h1>
        <div className="flex sm:flex-row flex-col md:items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-1 rounded-md w-full p-2 bg-[#FFFFFF0D] flex-1">
            <label htmlFor="noteTitle" className="text-sm font-semibold">
              Title:
            </label>
            <input
              id="noteTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-none bg-transparent text-sm w-full font-semibold"
              placeholder="Note title"
            />
          </div>
          <div className="flex items-center gap-1 rounded-md w-fit p-2 bg-[#FFFFFF0D]">
            <label htmlFor="noteTitle" className="text-sm font-semibold">
              Folder:
            </label>
            <select
              className="bg-transparent outline-none cursor-pointer"
              onChange={(e) => setFolder(e.target.value)}
            >
              <option className="" value="">
                Select Folder
              </option>
              <option className="" value="Academics">
                Academics
              </option>
              <option className="" value="Events">
                Events
              </option>
              <option className="" value="Finances">
                Finances
              </option>
              <option className="" value="Perrsonal">
                Personal
              </option>
              <option className="" value="Tech">
                Tech
              </option>
              <option className="" value="Travel">
                Travel
              </option>
              <option className="" value="Work">
                Work
              </option>
              <option className="" value="Others">
                Others
              </option>
            </select>
          </div>
        </div>
        <div className="my-5 flexflex-col items-center gap-2 rounded-md w-full p-2 bg-[#FFFFFF0D] flex-1">
          <label htmlFor="note" className="text-sm font-semibold">
            Note:
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            id="note"
            className="outline-none bg-transparent text-sm w-full font-bold p-2 min-h-[200px]"
          />
        </div>
        <div className="text-center">
          <button
            onClick={submitForm}
            className="px-6 bg-[#FFFFFF0D] py-2 font-bold rounded-lg mt-4"
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
