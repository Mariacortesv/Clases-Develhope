const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(user) {
  const userJSON = JSON.stringify(user);
  localStorage.setItem("user", userJSON);
}

//Recuperar Datos
function getUser() {
  const userJSON = localStorage.getItem("user");

  if (userJSON) {
    const userObject = JSON.parse(userJSON);
    console.log("User data completed:", userObject);
    return userObject;
  } else {
    console.log("No user Data in localStorage.");
    return null;
  }
}

// Llamada a la función para guardar el usuario
saveUser(user);

// Llamada a la función para recuperar los datos del usuario
getUser();
