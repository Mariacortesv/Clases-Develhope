import { useEffect, useRef, useState } from "react";
import classes from  "./Myform.module.scss"

//crear funcion que inicialice el state con el objeto al principio asi solo se llama luego

function createData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

export function MyForm() {
  const [data, setData] = useState(createData());
  // Creamos un objeto para tener diferentes values
const mountedRef = useRef(false)


  //useRef Hook
  const inputRef = useRef(null); // attach to the element (username)
  useEffect (() => {
    if (!mountedRef.current){
      mountedRef.current = true
      console.log ('Mounting for the first time')
    } else {
      console.log ('Mounting again for debug purposes')
    }

    inputRef.current?.focus()
  },[])

  //function handleUsernameInputChange(event) ---> Cambiamos nombre

  function handleInputChange(event) {
    //setUsername(value) cambiamos y creamos nombre para cada input;
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked; //debemos tambien llamar a este atributo
    const type = event.target.type; //tambien el type

    setData((d) => {
      return { ...d, [name]: type === "checkbox" ? checked : value };
    });
    //hacemos un callback, creamos un spread operator para crear un nuevo objeto que llame al contenido del antiguo objeto
  }
  // console.log (username)

  function handleResetForm() {
    setData(createData());
  }

  function handleLoginformSubmit(event) {
    event.preventDefault(); // previene el comportamiento por default de eventos especificos, como el submit
    console.log("login button pressed", data);
  }

console.log(inputRef)

  return (
    <form onSubmit={handleLoginformSubmit}>
      <h2>My Form</h2>
      <input
        ref={inputRef}
        name="username" //ref: queremos que este focus cuando la pagina loads
        value={data.username}
        onChange={handleInputChange}
        placeholder="Hello!"
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
        placeholder="Secret!"
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handleInputChange}
      />
      <button className={classes.button} disabled={!data.username || !data.password}>Log in</button>
      <button className={classes.button} type="button" onClick={handleResetForm}>
        Reset
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}

/*Creamos un handler con el event 
 que tendra el current value dentro el input 
 Tenemos control del valor y como es guardado en el componente*/
