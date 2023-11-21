
const isLogged = true;
const firstPromise = new Promise((resolve, reject) => {
    setTimeout (() =>{
  if (isLogged) {
    const random = Math.random();
    resolve(random);
  } else {
    reject (new Error ("User not logged"));
  }}, 1000);
});

// Segunda promise
const secondPromise = (Number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (Number > 0.5) {
      const userData = { name: "John", age: 24 };
      resolve(userData);
    } else {
      reject(new Error ("Numero menor o igual a 0.5"));
    }
}, 1000);
  });
};

// Chain Promises
firstPromise
  .then((randomNum) => {
    console.log(randomNum);
    return secondPromise(randomNum);
  })
  .then((userData) => {
    console.log(userData);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Finally");
  });
