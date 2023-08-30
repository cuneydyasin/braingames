import "./styles.css";

import React, { useState } from "react";

function LevelControl() {
  const [level, setLevel] = useState(1); // Initial level is 1

  const increaseLevel = () => {
    if (level < 5) {
      setLevel(level + 1);
    }
  };

  const decreaseLevel = () => {
    if (level > 1) {
      setLevel(level - 1);
    }
  };

  return (
    <div className="level-control">
      <button className="level-button" onClick={increaseLevel}>
        <img
          src="/img/up-arrow.png"
          alt="Increase Level"
          height="28px"
          width="28px"
        />
      </button>
      <div className="level-indicator">
        <div className="level-circle">{level}</div>
      </div>
      <button className="level-button" onClick={decreaseLevel}>
        <img
          src="/img/down-arrow.png"
          alt="Decrease Level"
          height="28px"
          width="28px"
        />
      </button>
    </div>
  );
}

export default LevelControl;
