import React, { useState, Fragment } from "react";

const Contacts = () => {
  const [persons, setPersons] = useState([
    { name: "Hoose", number: "3141066664" }
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleChangeName = (e) => {
    const { target } = e;
    const { value } = target;
    setNewName(value);
  };

  const handleChangePhone = (e) => {
    const { target } = e;
    const { value } = target;
    setNewPhone(value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    if (newPhone.length < 10 || newPhone.length > 10) {
      alert("El número ingresado debe contener 10 digitos.");
    } else {
      let count = 0;
      for (let i = 0; i <= persons.length - 1; i++) {
        persons[0].number.includes();
        if (persons[i].number === newPhone) {
          alert(
            "Ya existe el número ingresado en la guía telefónica, favor de ingresar uno nuevo."
          );
          count = 1;
        }
      }
      if (count === 0) {
        const NewPersonObjet = {
          name: newName,
          number: newPhone
        };
        setPersons(persons.concat(NewPersonObjet));
        setNewName("");
        setNewPhone("");
      }
    }
  };

  return (
    <div className="contenedorContactos">
      <h1>Guía telefónica</h1>
      <form onSubmit={addPerson}>
        <div className="inNombre">
          <input
            placeholder="Nombre"
            value={newName}
            onChange={handleChangeName}
          />
        </div>
        <div className="inNumero">
          <input
            placeholder="Número"
            value={newPhone}
            onChange={handleChangePhone}
          />
        </div>
        <div className="btnAgregar">
          <button type="submit">Agregar</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <li className="listaPersonas idNum">
          <p>Número</p>
        </li>
        <li className="listaPersonas">
          <p>Nombre</p>
        </li>
        <li className="listaPersonas ape">
          <p>Teléfono</p>
        </li>
      </ul>
      {persons.map((persons, index) => {
        return (
          <ul key={index}>
            <li className="listaPersonas idNum">{index + 1}</li>
            <li className="listaPersonas">{persons.name}</li>
            <li className="listaPersonas ape">{persons.number}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Contacts;
