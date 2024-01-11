import React, { useContext, useEffect, useState } from "react";
import { LanguageContextEjercicio } from "./LanguageContextEjercicio";

export function Clock() {
  const languageContext = useContext(LanguageContextEjercicio);

  // Creamos Reloj
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("Setting up clock interval");
    const intervalId = setInterval(() => {
      console.log("Updating Date...");
      setDate(new Date()); 
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Clearing interval");
    };
  }, []);

  return (
    <div>
      <p>{languageContext === 'en' ? 'Current Time' : 'Hora actual'}: {date.toLocaleTimeString()}</p>
    </div>
  );
}
