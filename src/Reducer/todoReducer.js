import { DEL, SET, SUBMIT, UPDATE } from "../Action/actionType";

function reducer(state, action) {
  switch (action.type) {
    case SET:
      return { ...state, text: action.payload };
    case SUBMIT:
      return { ...state, text: "", todo: [...state.todo, action.payload] };
    case DEL:
      let temp = state.todo.filter((item) => {
        return item.id != action.payload;
      });
      return { ...state, todo: temp };
    case UPDATE:
      let editTemp = state.todo.map((item) => {
        if (item.id == action.payload.id) {
          let text = state.text;
          return {
            ...state,
            text: text,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        text: "",
        todo: editTemp,
      };

    default:
      return state;
  }
}
export default reducer;
