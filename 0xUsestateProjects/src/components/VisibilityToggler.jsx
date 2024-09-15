import React, { useState } from "react";

function VisibilityToggler() {
  const [isVisible, setVisibility] = useState(true);

  return (
    <div className="App">
      {isVisible && <h1 className="mb-5">Start editing to see some magic happen!</h1>}
      {isVisible ? (
        <button onClick={() => setVisibility((prev) => !prev)}>
          Hide Text
        </button>
      ) : (
        <button onClick={() => setVisibility((prev) => !prev)}>
          Show Text
        </button>
      )}
    </div>
  );
}

export default VisibilityToggler;
