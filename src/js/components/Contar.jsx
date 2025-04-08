import React, { useState } from "react";

export const Contar = () => {

    const [count, setCount] = useState(0);

    return (
      <div>
        <h4 className="conteo">{count} task</h4>
        <span onClick={() => setCount(count + 1)}>👍🏽</span>
        <span onClick={() => setCount(count - 1)}>👎🏽</span>
      </div>
    );
  };