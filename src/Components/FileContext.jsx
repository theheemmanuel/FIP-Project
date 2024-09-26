/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";
import Reducer from "./Reducer";
import { useState } from "react";
import { useEffect } from "react";
// import { useMemo } from "react";

export const ContextFile = createContext();
export default function FileContext({ children }) {
  const InitialState = {
    folder: "",
    note: "",
    fullScreen: false,
    newNote: false,
  };
  const [state, dispatch] = useReducer(Reducer, InitialState);

  // const notes = useMemo(
  //   () => [
  //     {
  //       id: 1,
  //       title: "My First Note My First Note",
  //       folder: "Personal",
  //       date: "Fri Sep 20 2024 13:46:07 GMT+0100 (West Africa Standard Time)",
  //       body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi optio dolor omnis atque voluptates natus cumque eveniet, fuga ut minus.",
  //     },
  //     {
  //       id: 2,
  //       title: "My Second Note",
  //       folder: "Academics",
  //       date: "Wed Sep 21 2024 13:46:07 GMT+0100 (West Africa Standard Time)",
  //       body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi optio dolor omnis atque voluptates natus cumque eveniet, fuga ut minus.",
  //     },
  //     {
  //       id: 3,
  //       title: "My Third Note",
  //       folder: "Tech",
  //       date: "Wed Sep 12 2024 13:46:07 GMT+0100 (West Africa Standard Time)",
  //       body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi optio dolor omnis atque voluptates natus cumque eveniet, fuga ut minus.",
  //     },
  //     {
  //       id: 4,
  //       title: "My fourth Note",
  //       folder: "Work",
  //       date: "Wed Sep 20 2024 13:46:07 GMT+0100 (West Africa Standard Time)",
  //       body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi optio dolor omnis atque voluptates natus cumque eveniet, fuga ut minus.",
  //     },
  //     {
  //       id: 5,
  //       title: "My Fifth Note",
  //       folder: "Travel",
  //       date: "Wed Sep 28 2024 13:46:07 GMT+0100 (West Africa Standard Time)",
  //       body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi optio dolor omnis atque voluptates natus cumque eveniet, fuga ut minus.",
  //     },
  //     {
  //       id: 6,
  //       title: "My Fifth Note",
  //       folder: "Finances",
  //       date: "Wed Aug 21 2024 13:46:07 GMT+0100 (West Africa Standard Time)",
  //       body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi optio dolor omnis atque voluptates natus cumque eveniet, fuga ut minus.",
  //     },
  //     {
  //       id: 7,
  //       title: "My Fifth Note",
  //       folder: "Events",
  //       date: "Wed May 21 2024 13:46:07 GMT+0100 (West Africa Standard Time)",
  //       body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi optio dolor omnis atque voluptates natus cumque eveniet, fuga ut minus.",
  //     },
  //     {
  //       id: 8,
  //       title: "My Fifth Note",
  //       folder: "Events",
  //       date: "Wed Oct 21 2023 13:46:07 GMT+0100 (West Africa Standard Time)",
  //       body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi optio dolor omnis atque voluptates natus cumque eveniet, fuga ut minus.",
  //     },
  //     {
  //       id: 9,
  //       title: "My Fifth Note",
  //       folder: "Events",
  //       date: "Wed Sep 23 2024 13:46:07 GMT+0100 (West Africa Standard Time)",
  //       body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi optio dolor omnis atque voluptates natus cumque eveniet, fuga ut minus.",
  //     },
  //     {
  //       id: 10,
  //       title: "My Fifth Note",
  //       folder: "Events",
  //       date: "Wed Sep 21 2022 13:46:07 GMT+0100 (West Africa Standard Time)",
  //       body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi optio dolor omnis atque voluptates natus cumque eveniet, fuga ut minus.",
  //     },
  //   ],
  //   []
  // );

  const [allNotes, setAllNotes] = useState(
    sessionStorage.getItem("notes")
      ? JSON.parse(sessionStorage.getItem("notes"))
      : []
  );
  useEffect(() => {
    sessionStorage.setItem("notes", JSON.stringify(allNotes));
  }, [allNotes]);
  const addNote = (note) => {
    setAllNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <ContextFile.Provider value={{ allNotes, state, dispatch, addNote }}>
      {children}
    </ContextFile.Provider>
  );
}
