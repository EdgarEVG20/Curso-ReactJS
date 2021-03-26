import React from "react";

const Asincrono = () => {
  //Asincronía es algo muy pero muy fundamental en JS
  //Porque es un lenguaje de programación que se ejecuta en un solo hilo
  //Significa que solo puede ejecutar una sola cosa a la vez en todo su proceso de vida.

  //asincrono: la respuesta sucede a futuro, una operación asincrona no esperará el resultado
  //sincrono: la respuesta está sucediendo en el presente, esa operación esperará el resultado.

  const handleClick = () => {
    console.log("Inicio");
    uno();
    console.log("Fin");
  };

  const uno = () => {
    setTimeout(() => {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  };
  const dos = () => {
    setTimeout(() => {
      console.log("Dos");
    }, 1000);
  };

  const handleClickSincrono = () => {
    console.log("Inicio");
    uno();
    console.log("Fin");
  };
  const unoSincrono = () => {
    console.log("Inicio");
    dosSincrono();
    console.log("Fin");
  };
  const dosSincrono = () => {
    console.log("Inicio");
    unoSincrono();
    console.log("Fin");
  };

  return (
    <div className="contenedorAsincrono">
      <h1>Sincrono y Asíncrono</h1>
      <button onClick={handleClick}> click</button>
      <button onClick={handleClickSincrono}>Click sincrono</button>
    </div>
  );
};

export default Asincrono;
