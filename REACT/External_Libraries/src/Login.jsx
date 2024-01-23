import { useRef, useState } from "react";

export function createLoginData() {
  return {
    username: "",
    password: "",
    rememberMe: false,
  };
}

export function MyLoginData({ onLogin }) {
  const [loginData, setLoginData] = useState(createLoginData());
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = () => {
    onLogin(loginData);
  };

  const handleReset = () => {
    setLoginData(createLoginData());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado:", loginData);
    onLogin(loginData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Navigate</h3>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleInputChange}
          ref={inputRef}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Remember me:
        <input
          type="checkbox"
          name="rememberMe"
          checked={loginData.rememberMe}
          onChange={handleInputChange}
        />
      </label>

      {/* Botón de inicio de sesión deshabilitado si las entradas 
de nombre de usuario o contraseña están vacías */}
      <button
        type="button"
        onClick={handleLogin}
        disabled={!loginData.username || !loginData.password}
      >
        Login
      </button>
      
      {/* Botón de submit para enviar el formulario */}
      <button type="submit">Submit!</button>

      {/* Botón de reset para limpiar los inputs */}
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

/*Creacion del componente Login y boton que no se pueda clickear 
al menos de que se ponga la contraseña y el username. Agregar un boton
de reset.
Para prevenir el comportamiento del formulario predeterminado utilizamos
 la funcion "preventDefault".
*/
