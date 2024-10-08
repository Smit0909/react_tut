import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo({editingTodo}) {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if(editingTodo)
    {
      setInput(editingTodo.text);
      setIsEditing(true);
    }
  }, [editingTodo])

  const addTodoHandler = (e) => {
    e.preventDefault();
    if(isEditing)
    {
      dispatch(updateTodo({id: editingTodo.id, text: input }));
      setIsEditing(false);
    }
    else{
    dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {isEditing ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
