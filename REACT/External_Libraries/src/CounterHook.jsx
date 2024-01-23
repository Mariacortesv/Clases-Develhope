import { useCounter } from "./UseCounter";


export function HookCounter({ initialvalue = 0 }) {
  const {counter, onIncrement, onDecrement, onReset}= useCounter(initialvalue)

  return (
    <div>
      <h3>I have counted to {counter}</h3>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

/* Crear un custom hook que implemente la logica de inicializar
el counter e incrementarlo, decrementarlo o restablecerlo */
