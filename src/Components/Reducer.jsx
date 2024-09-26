export default function Reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "PickFolder":
      return { ...state, folder: action.payload };
    case "PickNote":
      return {
        ...state,
        note: action.payload,
        fullScreen: true,
        newNote: false,
      };
    case "recentNote":
      return {
        ...state,
        note: action.payload.id,
        folder: action.payload.folder,
        fullScreen: true,
        newNote: false,
      };
    case "clearNote":
      return { ...state, note: "", fullScreen: false, newNote: false };
    case "newNote":
      return { ...state, newNote: true, fullScreen: true, note: "" };
    case "addedNote":
      return {
        ...state,
        note: action.payload,
        fullScreen: false,
        newNote: false,
      };
  }
  return action.payload;
}
