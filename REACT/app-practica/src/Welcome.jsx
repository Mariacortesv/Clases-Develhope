export function Welcome({ name, age, id }) {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      {name ? <h3> How old is {name}?</h3> : <h3> Name is not found!</h3>}
      <p> He is {age} years old</p>
      {age > 18 ? <p>Your age is {age}</p> : <p>You are Very Young</p>}
      {Boolean(id) && <p> His ID is {id} </p>}
      {id === 0 && <p>User does not exist!</p>}
    </div>
  );
}


//en este caso el ID es que aparece o desaparece si es truthy or falsy
//Boolean para que si es cero (0) de false, asi no aparece, tambien puede ser !!id (doble negacion)
// Conditional Renderion Ejercicio 2