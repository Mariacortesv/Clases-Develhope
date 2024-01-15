import { HelloWorld } from "./Helloworld";

export function Welcome({ name }) {
  return (
    <div>
         <h3>Ejercicio 1</h3>
      {name ? (
        <h4 className="welcome">Welcome, {name} ! </h4>
      ) : (
        <HelloWorld />
      )}
    </div>
  );
}
