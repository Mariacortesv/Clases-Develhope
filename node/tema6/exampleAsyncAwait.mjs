import * as fs from "node:fs/promises";

//creamos una funcion, poniendo la palabra async para poder usar await antes de la funcion que devuelve la promesa

async function outputFile() {
  try {
    const data = await fs.readFile("file-1.txt", { encoding: "utf-8" });

    console.log("data:", data);
  } catch (error) {
    console.error(error.message);
  }
}

outputFile();
/* 
// si lo run nos devuelve la promesa, con await hacemos que el codigo 
espere, hasta que el return de la promesa se resuelva
 */

// colocamos un try and catch para handeling el error

// lo mismo pero con multiples files

async function outputFiles() {
  try {
    const file1Data = await fs.readFile("file-1.txt", { encoding: "utf-8" });
    console.log("file1Data:", file1Data);

    const file2Data = await fs.readFile("file-1.txt", { encoding: "utf-8" });
    console.log("file2Data:", file2Data);

    const file3Data = await fs.readFile("file-1.txt", { encoding: "utf-8" });
    console.log("file3Data:", file3Data);


  } catch (error) {
    console.error(error.message);
  }
}

outputFiles();

// dara los 3 files, si alguno da error se detendra ahi y pasara al error

// usamos promise.all para leerlos todos juntos, este acepta un array, le pasaremos esta array de promises

async function outputFilesTogether(){
    try{
     const data =  await Promise.all([
        fs.readFile("file-1.txt", { encoding: "utf-8" }),
        fs.readFile("file-2.txt", { encoding: "utf-8" }),
        fs.readFile("file-3.txt", { encoding: "utf-8" })
     ])
     console.log("data:", data);
    }

    catch{
        console.error(errror)
    }
}
