import { useContext } from "react";
import { ContextFile } from "./FileContext";

const Folder = () => {
  const { notes, state, dispatch } = useContext(ContextFile);
  return (
    <div className="w-[20%] min-h-[100vh] bg-[#1C1C1C] px-4 py-6">
      <div className="h-fit sticky top-6">
        {/* <input
        type="text"
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-lg bg-transparent px-4 py-2 w-full outline-none"
      /> */}
        {state.folder === "" ? (
          <div>
            <h1 className="text-lg font-semibold">All Notes</h1>
            <div className="flex flex-col gap-2">
              {notes.map((item) => (
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
                  <div className="flex justify-between">
                    <p className="text-sm">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm">
                      {new Date(item.date).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-lg font-semibold">{state.folder}</h1>
            <div className="flex flex-col gap-2">
              {notes
                .filter((each) => each.folder === state.folder)
                .map((item) => (
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
                    <div className="flex justify-between">
                      <p className="text-sm">
                        {new Date(item.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm">
                        {new Date(item.date).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Folder;
