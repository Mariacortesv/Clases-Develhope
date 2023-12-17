import { useState } from "react";

export function Counter({initialvalue = 0}) {
  const [counter, setCounter] = useState(initialvalue);

  function handlerCounterIncrement() {
    // inmediato setCounter(counter + 1);
    //Callback mas seguro
    setCounter((c) => {
        return c + 1
    })
  }

  function handlerCounterDecrement() {
    //setCounter(counter - 1);
    setCounter((c) => {
        return c - 1
    })
  }

  function handlerCounterReset() {
    // si no necesitamos la primera variable no usamos el callback
    setCounter(initialvalue);
  }

  return (
    <div>
      <h2>I have counted to {counter}</h2>
      <button onClick={handlerCounterIncrement}>Increment</button>
      <button onClick={handlerCounterDecrement}>Decrement</button>
      <button onClick={handlerCounterReset}>Reset</button>
    </div>
  );
}

/* Ejercicio State 1: When calling "setter" function to increment the counter, 
should the parameter be a function or an immediate value? Why?
Puede ser inmediato, pero es mejor pasarlo como una callback function porque es
mas seguro y con esto si lo repetimos podemos cambiar el contador a la suma anterior
y no que empiece desde el initialValue (0) siempre
*/