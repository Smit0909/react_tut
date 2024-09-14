import { useCallback, useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  let [password, setPassword] = useState("");

  //useRef hook
  const passowordRef = useRef("");
  const copyBtnRef = useRef("");

  const passwordGen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numAllowed) str += "123456789";
    if (specialCharAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);

      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numAllowed, specialCharAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passowordRef.current?.select();
    copyBtnRef.current?.classList.add('bg-blue-900');
    copyBtnRef.current?.classList.remove('bg-blue-700');
    passowordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGen();
  }, [length, numAllowed, specialCharAllowed, passwordGen]);

  return (
    <div className="w-full max-w-md mx-auto my-20 shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-900">
      <h1 className="align-center text-white text-center my-3 text- ">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 font-bold">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passowordRef}
        />
        <button
          class="bg-blue-700 text-white outline-none px-3 py-0.5 shrink-0"
          onClick={copyPassword}
          ref={copyBtnRef}
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={specialCharAllowed}
            id="specialCharInput"
            onChange={() => setSpecialCharAllowed((prev) => !prev)}
          />
          <label>SpecialCharacters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
