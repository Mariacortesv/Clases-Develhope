import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";

export function App() {
  return (
    <div>
      <h1>My awesome aplication</h1>
      <hr />
      <HelloWorld />
      <HelloWorld />
      <Message />
    </div>
  );
}

// Si lo pongo doble, aparece dos veces
