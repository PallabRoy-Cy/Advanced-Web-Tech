import React from "react";
import { useState, useEffect } from "react";

function Subtotal({ data, getTotal, id }) {
  let price = data;

  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function handleDecrement() {
    setCount((prevCount) => {
      if (prevCount > 1) {
        return prevCount - 1;
      } else {
        return 1;
      }
    });
  }

  useEffect(() => {
    // compute and report total whenever dependencies change
    if (typeof getTotal === "function") {
      getTotal(count * price, id);
    }
  }, [count, getTotal, id, price]);

  return (
    <div className="mycartaction">
      <div className="fornumber">
        <div className="number">
          <span className="minus" onClick={handleDecrement}>
            -
          </span>

          <input type="text" value={count} readOnly />
          <span className="plus" onClick={handleIncrement}>
            +
          </span>
        </div>
      </div>
      <br />
      <br />
      <div id="subtotaldiv">Subtotal: {count * price}</div>
    </div>
  );
}

export default Subtotal;
