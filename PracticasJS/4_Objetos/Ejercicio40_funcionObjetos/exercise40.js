//CLONAMOS CON UN assign
let user = {
  nombre: "Cosimo",
  age: 30,
};
const copiar = Object.assign({}, user);

copiar.nombre = "Paolo";


console.log(copiar);
console.log(user);
