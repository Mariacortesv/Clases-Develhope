const people = [
    { id: 2, nombre: "Gabriela", edad: 44, ciudad: "Monterrey", pais: "México" },
    { id: 4, nombre: "Jose", edad: 18, ciudad: "Madrid", pais: "España"},
    { id: 1, nombre: "Maria", edad: 28, ciudad: "Caracas", pais: "Venezuela" },
    { id: 3, nombre: "Pablo", edad: 16, ciudad: "Barcelona", pais: "España" },
    { id: 10, nombre: "Juan", edad: 31, ciudad: "Paris", pais: "Francia" },
    { id: 20, nombre: "Paula", edad: 42, ciudad: "New York", pais: "Estados Unidos" },
    { id: 12, nombre: "Jorge", edad: 25, ciudad: "Los Angeles", pais: "Estados Unidos" },
    { id: 9, nombre: "Carolina", edad: 47, ciudad: "Roma", pais: "Italia" },
    { id: 8, nombre: "Eduardo", edad: 20, ciudad: "Munich", pais: "Alemania" },
    { id: 11, nombre: "Fabiola", edad: 48, ciudad: "Lima", pais: "Peru" },
    { id: 23, nombre: "Pedro", edad: 52, ciudad: "Buenos Aires", pais: "Argentina" },
    { id: 20, nombre: "Julio", edad: 34, ciudad: "Bogota", pais: "Colombia" },
    { id: 17, nombre: "Ana", edad: 39, ciudad: "México DF", pais: "México" },
    { id: 18, nombre: "Roberto", edad: 15, ciudad: "Burdeos", pais: "Francia" },
    { id: 35, nombre: "Paola", edad: 25, ciudad: "Cordoba", pais: "Argentina" },
  ];

  // 1) Ordenar por edad sort
  const peopleEdad = people.sort((a, b) => b.edad - a.edad);
  console.log(peopleEdad)

// 2) Ordenar alfabéticamente por nombre
const peopleNombre = people.sort((a,b)=> {
    if (a.nombre > b.nombre){
        return 1;
    } else if(a.nombre < b.nombre){
        return -1;
    } else {
return 0;
    } 
})

// console.log (`Ordenado Por Nombre: ${JSON.stringify(peopleNombre)}`)
console.log ("Nombre ordenados:")
console.log(peopleNombre)

// 3) Extraer nombres con A
const peopleConA = people.filter ((persona)=>{
if (persona.nombre.includes("a") || persona.nombre.includes ("A")){
    return true;
}
return false;
})
console.log('Array con A:')
console.log (peopleConA)

//Mas directo: lo sabe el filter sin hacer condicion (tambien podemos poner .tolowercase() antes de includes)
const peopleConA2 = people.filter ((persona)=>{
  return persona.nombre.includes("a") || persona.nombre.includes ("A")}
   )
console.log(peopleConA2)

// 4) Mostrar persona mayor
const personaMayor = people.sort((a,b)=> b.edad - a.edad);
const personaMayorDos = personaMayor.find ((person) => person === personaMayor[0])
console.log('Persona Mayor es:')
console.log(personaMayorDos)

// 5) Devolver un array con todos los nombres
const peronaNombre = people.map((person) => {
   return person.nombre
})

console.log("Los Nombre son:")
console.log(peronaNombre)

// Devolver números que son mayores a su posición en el array. Id mayor que el index (osea posicion en array)
const personaOrden = people.filter((person) => {
    return person.id > people.indexOf(person)
})

console.log ('Id Mayores que index')
console.log (personaOrden)

// Devolver números pares
const numPares = people.filter((num) => {
    return num.edad % 2 === 0
})
console.log('Los numeros pares son:')
console.log(numPares)

// Devolver el objeto con las ppropiedas numericas (ID, edad)
function soloPropNume(arr){
    const newArr = [];
    arr.forEach(obj => {
        for (const prop in obj){
            if(typeof obj[prop] === 'number'){
                newArr.push({[prop]: obj[prop]})
            }
        }
    });
    return newArr
}

console.log (soloPropNume(people))

// Devolver nuevo array con strings que sean mayores a 5
function devolverString(arr){
    const arrFinal =  arr.filter(obj => obj.nombre.length>5)
    return arrFinal;
}

console.log(devolverString(people))


//1) Devolver un array con solo las personas que son de Argentina
//2) Devolver un array con las personas con edad múltiplo de 5
//3) Devolver la persona menor
//4) devolver un array con las personas que vivan en ciudades de nombre menor a 7 caracteres
//5) Devolver un array con las personas ordenadas de acuerdo a su país alfabéticamente
//6) Devolver un array con los id múltiplos de 3