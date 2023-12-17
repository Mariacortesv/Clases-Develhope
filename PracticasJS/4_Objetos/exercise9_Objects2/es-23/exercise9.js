const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

let keys = Object.keys (person);
let values = Object.values (person);
console.log(keys)
console.log (values)

// se me ocurre con foreach aunque el enunciado no lo pone

keys.forEach (function(key){
  console.log(key + ": " + person[key])
});