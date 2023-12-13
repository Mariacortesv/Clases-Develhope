// numR_prueba.js

async function obtenerNumeroRandom() {
   try {
     const response = await fetch("http://numbersapi.com/random/year");
     if (!response.ok) {
       throw new Error("Error al obtener el número random");
     }
 
     const data = await response.text();
     mostrarNumeroEnPagina(data);
   } catch (error) {
     console.error("Error:", error.message);

   }
 }
 
 function mostrarNumeroEnPagina(numero) {
   const contenedor = document.getElementById("contenedor");
   contenedor.textContent = numero;
 }
 