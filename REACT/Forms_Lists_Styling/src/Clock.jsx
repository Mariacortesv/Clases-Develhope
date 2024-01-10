import { useEffect, useState } from "react";
import './index.scss';

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log ('Setting up clock interval')
    const intervalId = setInterval(() => {
        console.log('Updating Date...')
      setDate(new Date()); //se crea cada segundo
    }, 1000);
return  () => {
    clearInterval (intervalId) //cleanup function
    console.log('Clearing interval')
}
  }, []);

  return (
    <div>
      <h3>Ejercicio 2</h3>
      <p  className="clock"> Current Time: {date.toLocaleTimeString()}</p>
    </div>
  );
}
