import { useState } from "react";
import { Welcome } from "/Users/mariacortes/Documents/GitHub/Clases-Develhope/REACT/Forms_Lists_Styling/src/Welcome.jsx";

export function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
        <h3>Ejercicio 1</h3>
         <Welcome name={inputValue} />
      <input
        type="text"
        name="nameInput"
        value={inputValue}
        onChange={handleInputChange}
      />
     
    </form>
  );
}

/* Crea un componente llamado InteractiveWelcome que renderice una etiqueta de entrada (input) y 
el componente Welcome. Pasa el contenido actual de la etiqueta de entrada a la propiedad (prop) 
name del componente Welcome. La etiqueta de entrada debería ser un componente controlado.*/
