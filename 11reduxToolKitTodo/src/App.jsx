import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [editingTodo, setEditingTodo] = useState(null); 
  return (
    <>
      <div className="text-3xl text-white">Learning Redux Toolkit</div>
      <AddTodo editingTodo={editingTodo}/>
      <Todos setEditingTodo={setEditingTodo} />
    </>
  );
}

export default App;
