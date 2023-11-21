const number = 15;

const miPromesa = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(`El número ${number} es mayor a 10`);
  } else {
    reject(`El número ${number} es menor a 10`);
  }
});

// then y catch
miPromesa
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
