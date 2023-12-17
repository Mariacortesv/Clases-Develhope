import { useEffect, useState } from "react";

export function CounterTwo({ initialvalue = 0 }) {
  const [counter, setCounter] = useState(initialvalue);

  // Solo aparecera cuando el componente mount
  useEffect(() => {
    console.log("I have been mounted");
  }, []);

  useEffect(() => {
    console.log(`The Value of the counter is ${counter} `);
    return () => {
      console.log(`The Value of the counter was ${counter}`);
    };
  }, [counter]);

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
