const someTask = new Promise(function (resolve, reject) {

  //setTimeout(() => resolve("this is some data"), 2000);

  // hacemos uno con error
  setTimeout(() => reject(new Error('paso un error')), 2000);
});

console.log(someTask);

someTask.then(
  function (value) {
    //resolve
    console.log("value:", value); //que valor es
    console.log("someTask:", someTask); //log la promise para saber que pasa cuando esta fullfill
  },
  function (reason) {
    //rejectec
    console.log("reason", reason); //la razon
    console.log("someTask:", someTask); //log la promise para saber que pasa cuando esta fullfill
  }
);
//primero le pasamos el fullfill handle cuando la promise esta resuelta
