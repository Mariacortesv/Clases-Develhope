import { useRef, useState } from "react";

export function MyUncontrolledLogin({ onLogin }) {
  // useRef accede a los valores de los inputs directamente
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Acceder a los valores del DOM
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;
    const rememberValue = rememberRef.current.checked;

    // Crear objeto, llamamos funcion con objeto
    const loginData = {
      username: usernameValue,
      password: passwordValue,
      remember: rememberValue,
    };
    onLogin(loginData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Ejercicio 1</h3>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>

      <label>
        Password:
        <input type="password" ref={passwordRef} />
      </label>

      <label>
        Remember me:
        <input type="checkbox" ref={rememberRef} />
      </label>

      <button type="submit">Submit!</button>

      <h3 >Ejercicio 2</h3>
      <p className="text-3xl font-bold underline">
        Intenta acceder a los valores del formulario utilizando la API FormData.
        ¿Cuáles son las ventajas?
        </p>
        <ul>
          <li>Facilidad para obtener los datos del formulario</li>
          <li>Funciona con diferentes elementos</li>
        </ul> 
        ¿Cuáles son las desventajas?
        <ul>
          <li>Devuelve un objeto FormData, no un objeto de JavaScript</li>
          <li>
            No tiene flexibilidad para acceder directamente a los elementos del
            formulario
          </li>
          <li>
            Si solo se necesitan algunos datos, puede ser complicado porque
            incluye todo
          </li>
        </ul>
        <p>
        Es buena para manejar archivos fácilmente, pero solo si es un formulario
        sencillo.
        </p>
    </form>
  );
}

/*Implementa un componente UncontrolledLogin que realice todas 
las operaciones del componente Login, pero que utilice componentes
 no controlados. Intenta acceder a los valores del formulario
  utilizando la API del DOM leyendo event.target dentro del
   manejador de eventos onSubmit. */
