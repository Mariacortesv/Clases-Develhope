const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon"

console.log(person1);
console.log(person2);

/* Se cambia en ambos porque se pasa rl valor
por referencia, hemos pasado directamente
el contenido que se encuentra en la memoria
por esto afecta al original */