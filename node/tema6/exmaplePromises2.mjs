import * as fs from "node:fs/promises";

// en este caso no tengo ese file por lo que me dara siempre el error

fs.readFile("file-1.txt", { encoding: "utf-8" }).then(
  //cuando este resolve
  function (data) {
    console.log("data:", data);
  },
  function (error) {
    console.error(error);
  }
);

//bloque de captura es un then y luego un catch

fs.readFile("file-2.txt", { encoding: "utf-8" })
  // el primero no return ningun value
  .then(function (file2Data) {
    console.log("file2Data:", file2Data);
  })

  // return a function con una nueva promise
  .then(function () {
    return fs.readFile("file-3.txt", { encoding: "utf-8" });
  })
  .then(function (file3Data) {
    console.log("file3Data:", file3Data);
  })

  .catch(function (error) {
    console.error(error);
  });

//esto permite añadir mas promises, un promise chain, asi podemos ir poniendo mas
// si hay un error no pasara a la siguiente promise, sino directo al error

// Refactoring volviendo a arrow function, menos lineas y mas limpio

fs.readFile("file-2.txt", { encoding: "utf-8" })
  .then((file2Data) => console.log("file2Data:", file2Data))

  .then(() => fs.readFile("file-3.txt", { encoding: "utf-8" }))

  .then((file3Data) => console.log("file3Data:", file3Data))

  .catch((error) => console.error(error));
