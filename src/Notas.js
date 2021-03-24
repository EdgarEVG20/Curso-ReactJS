import React from "react";

const Nota = (props) => {
  //console.log("propsNota", props);
  const { noteNote } = props;

  return <li>{noteNote.content}</li>;
};

const Notas = (props) => {
  const { notes } = props;
  //console.log(notes);

  //Dentro del return siempre para llamar
  //a las variables deben de ir con llaves.
  //Ecmascript 6
  //Map
  return (
    <div>
      <h1>Notas</h1>
      <ul>
        {notes.map((noteArray) => (
          <Nota key={noteArray.id} noteNote={noteArray} />
        ))}
      </ul>
    </div>
  );
};

//Imprimir una lista de un array (Dentro de return).
/*
//console.log(note);
<ul>
  <li>{notes[0].content}</li>
  <li>{notes[1].content}</li>
  <li>{notes[2].content}</li>
</ul>
*/

//Otra forma de imprimir una lista de un array
/*
<ul>
  {notes.map((note) => {
    //console.log(note);
    return <li key={note.id}>{note.content}</li>;
  })}
</ul>
*/
export default Notas;
