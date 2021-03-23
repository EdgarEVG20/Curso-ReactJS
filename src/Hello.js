import React from "react";

const Hello = (props) => {
  console.log("Props", props);
  const { name, age } = props;
  return (
    <div>
      <p>
        Hola {name}, tienes {age} años.
      </p>
    </div>
  );
};

export default Hello;
