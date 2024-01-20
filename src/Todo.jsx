import React, { useReducer, useState } from "react";
import reducer from "./Reducer/todoReducer";
import { DEL, SET, SUBMIT, UPDATE } from "./Action/actionType";
import { deleteData, submitData, textSetter, updateData } from "./Action/actionCreator";
function Todo() {
  let [edit, setEdit] = useState(false);
  let intialState = {
    text: "",
    todo: [],
    edit: "",
  };
  function deleteHandler(id) {
    dispatch(deleteData(id));
  }
  function editHandler(id) {
    let findata = todo.todo.find((item) => {
      return item.id == id;
    });
    setEdit(findata);
    dispatch(textSetter(findata.text));
  }
  function submitHanlder() {
    let obj = {
      id: Math.trunc(Math.random() * 100000),
      text: todo.text,
    };
    if (!edit) {
      dispatch(submitData(obj));
    } else {
      dispatch( updateData(edit));
      setEdit("");
    }
  }
  let [todo, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      {console.log(todo)}
      <input
        type="text"
        placeholder="enter your data"
        value={todo.text}
        onChange={(e) => {
          dispatch(textSetter(e.target.value));
        }}
      />
      <button onClick={submitHanlder}>submit</button>
      <hr />
      {todo.todo?.map((item) => {
        return (
          <>
            <div>
              <h5>{item.text}</h5>
              <button
                onClick={() => {
                  deleteHandler(item.id);
                }}
              >
                del
              </button>
              <button
                onClick={() => {
                  editHandler(item.id);
                }}
              >
                edit
              </button>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Todo;
