import { useContext, useEffect, useState } from "react";
import EmptyPic from "../assets/EmptyPic.png";
import { ContextFile } from "../Components/FileContext";
import date from "../assets/Date.png";
import folder from "../assets/Folder.png";
import NewNote from "./NewNote";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useToast,
} from "@chakra-ui/react";
const Home = () => {
  const { allNotes, state, dispatch, deleteNote, editNote } =
    useContext(ContextFile);
  const currentNote = allNotes.find((note) => note.id === state.note);
  useEffect(() => {
    if (currentNote) {
      setEdittedNote(currentNote.body);
    }
    setEditMode(false);
  }, [currentNote]);
  const [editMode, setEditMode] = useState(false);
  const [edittedNote, setEdittedNote] = useState(
    currentNote ? currentNote.body : ""
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteButton = () => {
    deleteNote(state.note);
    dispatch({ type: "clearNote" });
    onClose();
    toast({
      title: "Note Deleted.",
      description: "Your note has been deleted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  const toast = useToast();
  const saveButton = () => {
    editNote(state.note, edittedNote);
    setEditMode(false);
    toast({
      title: "Note Updated.",
      description: "Your note has been updated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Note!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to delete this note?</ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={deleteButton}>
              Yes
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="text-white h-fit sticky top-6 px-6">
        {state.note === "" && !state.newNote ? (
          <div className="flex flex-col justify-center items-center min-h-[80vh] text-center">
            <img src={EmptyPic} alt="" />
            <h1 className="text-[28px] font-[600]">Select a note to view</h1>
            <p className="w-2/3">
              Choose a note from the list on the left to view its contents, or
              create a new note to add to your collection.
            </p>
            <button
              onClick={() => dispatch({ type: "newNote" })}
              className="px-4 bg-[#312EB5] py-2 font-bold rounded-lg mt-4"
            >
              + New Note
            </button>
          </div>
        ) : state.newNote ? (
          <NewNote />
        ) : (
          allNotes
            .filter((note) => note.id === state.note)
            .map((note) => (
              <div key={note.id}>
                <div className=" pb-4 flex justify-between">
                  <button
                    onClick={() => dispatch({ type: "clearNote" })}
                    className="bg-[#312EB5] px-4 py-2 rounded-lg text-sm font-bold"
                  >
                    &larr; GO BACK
                  </button>
                  <h1 className="font-play text-xl font-bold">JotItDown 🖊</h1>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <h1 className="text-2xl font-[600]">{note.title}</h1>
                  <div className="flex gap-4">
                    {editMode ? (
                      <button
                        onClick={saveButton}
                        className="bg-[#312EB5] px-4 py-2 rounded-lg text-sm font-bold"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => setEditMode(true)}
                        className="bg-[#FFFFFF0D] px-4 py-2 rounded-lg text-sm font-bold"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={onOpen}
                      className="bg-[#FFFFFF0D] px-4 py-2 rounded-lg text-sm font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 mb-2">
                  <img src={date} alt="" />
                  <p className="text-sm font-semibold text-[#FFFFFF99]">
                    Date: {new Date(note.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm font-semibold text-[#FFFFFF99]">
                    Time: {new Date(note.date).toLocaleTimeString()}
                  </p>
                </div>
                <hr />
                <div className="flex gap-4 mt-4 mb-2">
                  <img src={folder} alt="" />
                  <p className="text-sm font-semibold text-[#FFFFFF99]">
                    Folder: {note.folder}
                  </p>
                </div>
                <hr />
                {editMode ? (
                  <textarea
                    value={edittedNote}
                    onChange={(e) => setEdittedNote(e.target.value)}
                    className="my-6 bg-[#1C1C1C] w-full min-h-[200px] outline-none p-2"
                    autoFocus
                  ></textarea>
                ) : (
                  <p className="my-6 whitespace-pre-wrap">{note.body}</p>
                )}
              </div>
            ))
        )}
      </div>
    </>
  );
};

export default Home;
