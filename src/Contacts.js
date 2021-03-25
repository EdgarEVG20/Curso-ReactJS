import React, { useState, Fragment } from "react";

const Contacts = () => {
  const [persons, setPersons] = useState([
    { name: "Hoose", number: "3141066664" }
  ]);
  const [newName, setNewName] = useState("");

  return (
    <div className="contenedorContactos">
      <h1>Guía telefónica</h1>
      <form>
        <div className="inNombre">
          <input placeholder="Nombre" />
        </div>
        <div className="inNumero">
          <input placeholder="Número" />
        </div>
        <div className="btnAgregar">
          <button type="submit">Agregar</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {/* MOSTRAR GUÍA AQUÍ */}
    </div>
  );
};

export default Contacts;
