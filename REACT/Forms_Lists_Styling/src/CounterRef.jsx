import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  const changeDirectionRef = useRef(null);

  useEffect(() => {
    const direction = counter > initialValue ? "up" : "down";
    changeDirectionRef.current = direction;

    if (changeDirectionRef.current !== null) {
      console.log(`Cambio de dirección: ${changeDirectionRef.current}`);
    }
  }, [counter, initialValue]);

  function handlerCounterIncrement() {
    setCounter((c) => {
      return c + 1;
    });
  }

  function handlerCounterDecrement() {
    setCounter((c) => {
      return c - 1;
    });
  }

  function handlerCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <h3> Ejercicio 3</h3>
      <CounterDisplay counter={counter} />
      <button onClick={handlerCounterIncrement}>Increment</button>
      <button onClick={handlerCounterDecrement}>Decrement</button>
      <button onClick={handlerCounterReset}>Reset</button>
    </div>
  );
}

/* Ejercicio 2 Refs: Modifica el componente `Counter` para que cada 
vez que cambie el valor del contador, se actualice el valor de una 
referencia (`ref`) para contener la dirección del cambio 
(es decir, "arriba" o "abajo") en relación con la propiedad
`initialValue`. Imprime el valor de la referencia en la consola
solo cuando sea diferente al valor anterior. */
