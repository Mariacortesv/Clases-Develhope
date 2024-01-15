export function Color({ color }) {
  return <li>{color.name}</li>;
}

/* Crear un componente llamado Color que recibe un objeto
llamado 'color' como propiedad, el cual tendrá 2 propiedades, 
'id' y 'name', y devuelve una etiqueta 'li' que muestra la 
propiedad 'name'. Crear un segundo componente llamado Colors,
que toma un array de objetos como propiedad, donde las propiedades
son siempre 'name' e 'id', y muestra una lista desordenada de
componentes Color."*/
