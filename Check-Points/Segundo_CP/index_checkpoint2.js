/* //Escribe una función que tome una matriz de objetos como parámetro. 
Cada objeto tiene una propiedad de "nombre" y una propiedad de "edad".
 La función debería devolver el objeto con mayor edad. */

const persons = [
  {
    nombre: "Maria",
    edad: 30,
  },
  {
    nombre: "Jose",
    edad: 20,
  },
  {
    nombre: "Marissa",
    edad: 35,
  },
  {
    nombre: "Lorena",
    edad: 14,
  },
  {
    nombre: "Jaime",
    edad: 19,
  },
  {
    nombre: "Manuel",
    edad: 45,
  },
];

function personaMayor() {
  let personMayor = persons[0];
  persons.map((person) => {
    if (person.edad > personMayor.edad) {
      personMayor = person;
    }
  });
  return personMayor;
}

console.log(personaMayor());
