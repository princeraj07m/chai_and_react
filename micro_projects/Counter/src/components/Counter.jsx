import React, { use, useState } from "react";

function Counter() {
  var [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }

  return (
    <div className="parentcount">
      <div className="count">
        <h1 className="countnum">{count}</h1>
      </div>
      <div className="parent2count">
        <button className="decbutton" onClick={dec}>
          -
        </button>
        <button className="incbutton" onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
