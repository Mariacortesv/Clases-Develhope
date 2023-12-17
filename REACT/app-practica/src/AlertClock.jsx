import { Button } from "./Button";

export function AlertClock() {
  function handleShowTime() {
    const now = new Date()
    alert(`The current time is ${now.toLocaleTimeString()}`)
  }
  return (
    <div>
      <p>Click the Button to show the current Time</p>
      <Button onclick={handleShowTime} label = "Click Me" />
    </div>
  );
}

//creamos la funcion que llamaremos luego en el onCLick, para que el boton haga lo que queremos
//AlertClock es el componente que implementa la logica que llamamos cada vez que se da click al boton