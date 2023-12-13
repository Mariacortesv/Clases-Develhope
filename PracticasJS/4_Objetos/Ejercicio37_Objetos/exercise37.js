let car ={
    name: "ford",
    color: 'azul'
}

console.log(car["name"])
console.log(car.color)

/* For in, iteramos los objetos para sacar las keys,
guardarlo en una constante (la constante tiene todas las keys) y para sacar 
el valor de una key se pone nombre del obj[key], como en claves estan 
todas las keys por eso nos dara todos los valores */

// PARA SACAR TODOS Las keys y VALORES ITERAMOS
for (const claves in car) {
   console.log(claves + ":" + car[claves])
}

// sacamos los valores

for (const claves in car) {
    console.log(car[claves])
 }