import React, { useState, Fragment } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  /*const handleClick = (aumentar) => {
    if (aumentar) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };*/

  const aumentar = () => {
    //alert("Click");
    setCount(count + 1);
  };

  const disminuir = () => {
    //alert("Click");
    setCount(count - 1);
  };

  return (
    <Fragment>
      <button className="btn" onClick={() => aumentar()}>
        Aumentar
      </button>
      <p>Nuestro contador es {count}</p>
      <button className="btn" onClick={() => disminuir()}>
        Disminuir
      </button>
    </Fragment>
  );
};

export default Counter;
