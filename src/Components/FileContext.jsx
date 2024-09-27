/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";
import Reducer from "./Reducer";
import { useState } from "react";
import { useEffect } from "react";

export const ContextFile = createContext();
export default function FileContext({ children }) {
  const InitialState = {
    folder: "",
    note: "",
    fullScreen: false,
    newNote: false,
  };
  const [state, dispatch] = useReducer(Reducer, InitialState);

  const [allNotes, setAllNotes] = useState(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }, [allNotes]);
  const addNote = (note) => {
    setAllNotes((prevNotes) => [...prevNotes, note]);
  };
  const deleteNote = (id) => {
    setAllNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const editNote = (id, updatedNote) => {
    setAllNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, body: updatedNote } : note
      )
    );
  };

  return (
    <ContextFile.Provider
      value={{ allNotes, state, dispatch, addNote, deleteNote, editNote }}
    >
      {children}
    </ContextFile.Provider>
  );
}
