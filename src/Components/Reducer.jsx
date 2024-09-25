export default function Reducer(state, action) {
  // console.log(state, action);
  switch (action.type) {
    case "PickFolder":
      return { ...state, folder: action.payload };
    case "PickNote":
      return { ...state, note: action.payload };
    case "recentNote":
      return {
        ...state,
        note: action.payload.id,
        folder: action.payload.folder,
      };
  }
  return action.payload;
}
