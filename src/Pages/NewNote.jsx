import { useContext } from "react";
import { ContextFile } from "../Components/FileContext";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const NewNote = () => {
  const [title, setTitle] = useState("");
  const [folder, setFolder] = useState("");
  const [note, setNote] = useState("");

  const toast = useToast();

  const validateForm = () => {
    let result = true;
    if (title === "") {
      toast({
        title: "Note Title",
        description: "Input Note Title",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      result = false;
    }
    if (folder === "") {
      toast({
        title: "Note Folder",
        description: "Select Note Folder",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      result = false;
    }
    if (note === "") {
      toast({
        title: "Note Content",
        description: "Input Note Content",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      result = false;
    }
    return result;
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
      setTitle("");
      setFolder("");
      setNote("");
      dispatch({ type: "addedNote", payload: newNote.id });
      toast({
        title: "Note Created.",
        description: "Your note has been created successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <div className=" pb-4 flex justify-between">
        <button
          onClick={() => dispatch({ type: "clearNote" })}
          className="bg-[#312EB5] px-4 py-2 rounded-lg text-sm font-bold"
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
              autoFocus
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-none bg-transparent w-full font-semibold"
              placeholder="Note title"
            />
          </div>
          <div className="flex items-center gap-1 rounded-md w-fit p-2 bg-[#FFFFFF0D]">
            <label htmlFor="noteTitle" className="font-semibold">
              Folder:
            </label>
            <input
              id="noteTitle"
              type="text"
              value={folder}
              onChange={(e) => setFolder(e.target.value)}
              className="outline-none bg-transparent w-full font-semibold"
              placeholder="Note Folder"
            />
          </div>
        </div>
        <div className="my-5 flexflex-col items-center gap-2 rounded-md w-full p-2 bg-[#FFFFFF0D] flex-1">
          <label htmlFor="note" className="font-semibold">
            Note:
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            id="note"
            className="outline-none bg-transparent w-full p-2 min-h-[200px]"
          />
        </div>
        <div className="text-center">
          <button
            onClick={submitForm}
            className="px-6 bg-[#312EB5] py-2 font-bold rounded-lg mt-4"
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
