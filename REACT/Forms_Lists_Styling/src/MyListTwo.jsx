import { useState } from "react";
import classes from  "./MyListTwo.module.scss"

//Rendering an Array of Objects
function MyListItem({ item }) {
  //podemos crear un state mas facil aqui o cualquier hook y no dentro del map

  const [Counter, setCounter] = useState(0);
  function handleIncrementCounter() {
    setCounter((c) => c + 1);
  }

  return (
    <li>
      <p className={Counter % 2 === 0 ? classes.evenBg : classes.oddBg}>
        {item.name}: is {item.age} years old!
      </p>
      <button className={classes.button} onClick={handleIncrementCounter}>{Counter}</button>
    </li>
  );
}

export function MyListTwo({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <MyListItem key={item.id} item={item} />

        /*    Creamos Directamente MyListItem 
    <li key={item.id}>
          <p>
            {item.name}: is {item.age} years old!
          </p> 
        </li> */
      ))}
    </ul>
  );
}

// No recibimos solo el nombre si no el item que ocntiene multiples keys
// React no renderiza objetos, no podemos poner directamente el 'item', solo las propiedades dentro
