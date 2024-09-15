import React, { useState } from "react";

function TogglePassword() {
  const [isVisible, setVisibility] = useState(false);
  const changeVisibility = () => {
    setVisibility((prev) => !prev);
  };
  return (
    <form>
      <h2 className="text-2xl mb-3">Login Form</h2>
      <input
        type="text"
        placeholder="Username"
        className="p-2 rounded-md mb-3"
      />

      <div className="relative mb-3">
        <input
          type={isVisible ? "text" : "password"}
          placeholder="Password"
          className="p-2 rounded-md"
        />

        <i
          className={`fa-regular ${
            isVisible ? "fa-eye" : "fa-eye-slash"
          } absolute right-2 top-3`}
          onClick={changeVisibility}
          role="button"
          tabIndex="0"
          aria-label={isVisible ? "Hide password" : "Show password"}
        ></i>
      </div>

      <button>Submit</button>
    </form>
  );
}

export default TogglePassword;
