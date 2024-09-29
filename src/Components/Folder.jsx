import { useContext } from "react";
import { ContextFile } from "./FileContext";
import { useState } from "react";

const Folder = () => {
  const { allNotes, state, dispatch } = useContext(ContextFile);
  const [search, setSearch] = useState("");
  const currentFolder = allNotes.filter((each) => each.folder === state.folder);
  const filteredNotes =
    search === ""
      ? allNotes
      : allNotes.filter((note) =>
          note.title.toLowerCase().includes(search.toLowerCase())
        );
  return (
    <div className="w-1/2 min-h-[100vh] bg-[#1C1C1C] px-4 py-6 text-white">
      <div className="h-fit sticky top-6">
        {state.folder === "" ? (
          <div>
            <h1 className="text-lg font-semibold">All Notes</h1>{" "}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search..."
              className="border-[1px] border-gray-300 rounded-lg bg-transparent px-4 py-2 w-full outline-none"
            />
            <div className="flex flex-col gap-2">
              {filteredNotes.length === 0 && (
                <p className="text-center py-6">No Notes Found</p>
              )}
              {filteredNotes.map((item) => (
                <div
                  onClick={() =>
                    dispatch({ type: "PickNote", payload: item.id })
                  }
                  key={item.id}
                  className={`mt-2 p-3 cursor-pointer bg-[#FFFFFF08] hover:bg-[#FFFFFF1A] ${
                    state.note === item.id && "bg-[#FFFFFF1A]"
                  }`}
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm pt-1">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-lg font-semibold">{state.folder}</h1>
            <div className="flex flex-col gap-2">
              {currentFolder.map((item) => (
                <div
                  key={item.id}
                  className={`mt-2 p-3 cursor-pointer bg-[#FFFFFF08] hover:bg-[#FFFFFF1A] ${
                    state.note === item.id && "bg-[#FFFFFF1A]"
                  }`}
                  onClick={() =>
                    dispatch({ type: "PickNote", payload: item.id })
                  }
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm pt-1">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {(allNotes.length === 0 ||
          (state.folder !== "" &&
            allNotes.filter((each) => each.folder === state.folder).length ===
              0)) && <p className="text-center py-6">No Notes Found</p>}
      </div>
    </div>
  );
};

export default Folder;
