import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("black");
  
  function changeBg(btnColor){
    setColor(btnColor);
  }
  return (
    <div
      className="h-screen w-screen flex justify-center items-end"
      style={{ backgroundColor: color }}
    >
      <div className="p-4 bg-slate-300 flex justify-center rounded-xl w-fit gap-4 mb-7 flex-wrap m-5">
        <button
          className="text-white rounded-lg py-2 px-4"
          style={{ backgroundColor: "red" }}
          onClick={() => changeBg("red")}
        >
          Red
        </button>
        <button
          className="text-white rounded-lg py-2 px-4"
          style={{ backgroundColor: "green" }}
          onClick={() => changeBg("green")}
        >
          Green
        </button>
        <button
          className="text-white rounded-lg py-2 px-4"
          style={{ backgroundColor: "blue" }}
          onClick={() => changeBg("blue")}
        >
          Blue
        </button>
        <button
          className="text-white rounded-lg py-2 px-4"
          style={{ backgroundColor: "olive" }}
          onClick={() => changeBg("olive")}
        >
          Olive
        </button>
        <button
          className="text-white rounded-lg py-2 px-4"
          style={{ backgroundColor: "gray" }}
          onClick={() => changeBg("gray")}
        >
          Gray
        </button>
        <button
          className="text-black rounded-lg py-2 px-4"
          style={{ backgroundColor: "yellow" }}
          onClick={() => changeBg("yellow")}
        >
          Yellow
        </button>
        <button
          className="text-white rounded-lg py-2 px-4"
          style={{ backgroundColor: "pink" }}
          onClick={() => changeBg("pink")}
        >
          Pink
        </button>
        <button
          className="text-white rounded-lg py-2 px-4"
          style={{ backgroundColor: "purple" }}
          onClick={() => changeBg("purple")}
        >
          Purple
        </button>
        <button
          className="text-black rounded-lg py-2 px-4"
          style={{ backgroundColor: "lavender" }}
          onClick={() => changeBg("lavender")}
        >
          Lavender
        </button>
        <button
          className="text-black rounded-lg py-2 px-4"
          style={{ backgroundColor: "white" }}
          onClick={() => changeBg("white")}
        >
          White
        </button>
        <button
          className="text-white rounded-lg py-2 px-4"
          style={{ backgroundColor: "black" }}
          onClick={() => changeBg("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
