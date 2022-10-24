import React from "react";
import "./coolButton.css";

function CoolButton({ mint }) {
  return (
    <main>
      <button className="mintbutton" onClick={mint}>
        Mint!
      </button>
    </main>
  );
}

export default CoolButton;
