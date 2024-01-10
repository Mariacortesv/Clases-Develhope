//Rendering an Array of Strings

export function MyList({items}) {
 // const names = ["Jame", "Kate", "Billy"]; Normalmente recibimos como item prop
  // const items = names.map((name) => <li>{name}</li>); Mejor poner dinecto

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}> {item}</li> //agregar key (suponiendo que no se repita el mismo)
      ))}
    </ul>
  )
}

// Queremos que sea una lista de componentes no de strings
// Recordar que cada elemento de la lista debe ser definido con un valor unico y estable
// Si se repiten keys debemos agregar el segundo paramtro de map, el index
// Sin embargo si se reordena, el index cambiara, por esto la key debe ser estable tambien