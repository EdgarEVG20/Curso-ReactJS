import "./styles.css";
import Hola from "./Hello";
import Contador from "./Counter";
import Cursos from "./Cursos";
import Notas from "./Notas.js";

//Const es un tipo de declaración de variable
//que nos dice que la variable es la misma
//en todo su tiempo de vida.

//Let es un tipo de declaración de variable
//que nos dice que la variable puede cambiar
//en el transcurso de su vida.

const notes = [
  {
    id: 1,
    content: "HTML es muy facil",
    date: "2020-12-12",
    important: true,
  },
  {
    id: 2,
    content: "Los navegadores solo pueden ejecutar JS, HTMl y CSS.",
    date: "2020-01-01",
    important: false,
  },
  {
    id: 3,
    content: "Para hacer peticines los métodos más utilizados son GET y POST.",
    date: "2020-01-02",
    important: false,
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>Saludos</h1>
      <Hola name="Edgar" age="20" />

      <Contador />

      <Cursos />

      <Notas notes={notes}/>
     
    </div>
  );
}
