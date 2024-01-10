import React, { useState } from "react";
import "./style.css";

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
 
  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>

      <section className="buttons-container">
        <button onClick={decrement} className="decrement">
          -
        </button>
        <button onClick={increment} className="increment">
          +
        </button>
      </section>
    </>
  );
}

export default Counter;
