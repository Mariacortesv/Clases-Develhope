import React, { useState } from "react";
import { List } from "./List";
import { Form } from "./FormEjemplo1";
import { FormDos } from "./FormEjemplo2";
import { Navigation } from "./NavigationUno";
import { NavigationDos } from "./NavigationDos";
import { LlamadaApi } from "./LlamadaApi";

export function Toggle() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div>
      <h2>Toggle Component</h2>
      <p>Estado: {isActive ? "Activado" : "Desactivado"}</p>
      <button onClick={handleToggle}>
        {isActive ? "Desactivar" : "Activar"}
      </button>
      {isActive && (
      <div>
      <p>Este componente está activado.</p>
      <hr />
      <List />
       <Form />
       <hr />
       <FormDos />
       <hr />
  
<hr />
<Navigation />
<hr />
<NavigationDos />
<hr />
<LlamadaApi />
</div>)}
    </div>
  );
}


