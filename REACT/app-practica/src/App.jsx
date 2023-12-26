import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { ConditionalRendering } from "./ConditionalRendering";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { CounterTwo } from "./CounterUseEffect";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";

export function App() {
  return (
    <div>
      <h1>My awesome aplication</h1>
      <hr />
      <h1>Ejercicio Components 1-4</h1>
      <HelloWorld />
      <HelloWorld />
      <Message />
      <hr />
      <h1>Ejercicio Prop 1-3</h1>
      <Welcome name="Jimmy" age={17} id={333} />
      <hr />
      <h1>Ejercicio Conditional Rendering 1-2</h1>
      <ConditionalRendering name="John" age={30} />
      <hr />
      <h1>Ejercicio Events</h1>
      <AlertClock />
      <hr />
      <h1> Ejercicio useState 1-2</h1>
      <Counter initialvalue={0} />
      <hr />
      <h1> Ejercicio useEffect 1</h1>
      <CounterTwo initialvalue={10} />
<h2> Current time, useEffect Ejercicio 2 </h2>
      <Clock />
      <hr />
      <h1>Ejercicio Event Handler 1-2</h1>
      <MouseClicker />
    </div>
  );
}

// Ejercicio Components 3: Si pongo HelloWorld doble, aparece dos veces, porque podemos usarlo todas las veces que queramos
