import "./styles.css";
import Hola from "./Hello";
import Contador from "./Counter";
export default function App() {
  return (
    <div className="App">
      <h1>Saludos</h1>
      <Hola name="Edgar" age="20" />

      <Contador />
    </div>
  );
}
