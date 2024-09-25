export default function Reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "PickFolder":
      return { ...state, folder: action.payload };
    case "PickNote":
      return { ...state, note: action.payload };
  }
  return action.payload;
}
