export function UncontrolledFrom() {
  // Podemos agregar un event handler directo en el elemento form
  function handleFormSubmit(event) {
    event.preventDefault();
    //necesitamos acceder directo a los inputs, para ver los valores

    const username = event.target.elements.namedItem("username").value; //valor contenido dentro del input
    const password = event.target.elements.namedItem("password").value; 
    const session = event.target.elements.namedItem("session").checked;
    
    // guardamos estos datos en una variable
    const data = {
      username,
      password,
      session,
    };
    console.log(data);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>My Uncontrolled Form</h2>
      <input name="username" />
      <input name="password" type="password" />
      <input name="session" type="checkbox" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}

/*Cada uno de los inputs en esta uncontrolled form,
 maneja sus propios state por si mismos, no necesitamos 
 tener un state variable para guardar toda la data del formulario,
 tampoco necesitamos evenet handlers para que haga algo cuando el 
 user escriba algo en el input*/
