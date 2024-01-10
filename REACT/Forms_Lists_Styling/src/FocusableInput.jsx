
import React, { useRef, useEffect } from 'react';

export function FocusableInput() {
  const inputRef = useRef(null);
  const isMounted = useRef (false)

  useEffect (()=> {
    if (!isMounted.current){
        console.log ("El Componente se ha montado por primera vez")
        isMounted.current = true
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
          <h3>Ejercicio 1, 2</h3>
      <label>
        Focusable Input:
        <input type="text" ref={inputRef} />
      </label>
    </div>
  );
}


/*
Crea un componente llamado FocusableInput que renderice 
una etiqueta input. Tan pronto como el componente se renderice,
 la etiqueta input debería recibir automáticamente el enfoque. */