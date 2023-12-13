let user = {
  name: "Maria",
  age: 30,
  pais: "Spain",
};


//CLONAMOS CON UN FOR IN
let newUser={}; //objeto vacio

/*Iteramos sobre el original, para tener toda la info
luego le pasamos esta info al nuevo objeto */
for (const claves in user){
 newUser [claves] = user [claves]
  }

  newUser.name = "Paolo";
  newUser.pais = "RD";

  console.log(newUser);
  console.log(user);