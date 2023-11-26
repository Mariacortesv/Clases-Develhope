const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(user) {
  const userJSON = JSON.stringify(user);
  localStorage.setItem("user", userJSON);
}

saveUser(user);
