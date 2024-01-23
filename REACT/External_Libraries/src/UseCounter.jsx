import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

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

  return {
    counter: counter,
    onIncrement: handlerCounterIncrement,
    onDecrement: handlerCounterDecrement,
    onReset : handlerCounterReset
  }


}

/* Al ponerlo en un nuevo documento, este hook que se maneja como un counter 
Podemos usarlo en otros archivos*/