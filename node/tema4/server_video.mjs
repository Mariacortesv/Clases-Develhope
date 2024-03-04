import {createServer} from 'node:http'

const server = createServer ((request, response) => {
    console.log('request recibida');

    response.statusCode = 200;

  // response.setHeader('Content-Type', "text/html");
  response.setHeader('Content-Type', "application/json");
    //creamos un jason response body (video jason)

    const jsonResponseBody = JSON.stringify({location:'earth'});
    response.end(jsonResponseBody)

    //response.end('<html> <body><h1> this page was served with node.js </h1> </body> </html>')

})

// request object es un Incoming Message class
// response es un Server Response class
// http 200 es success response

//el header es de tipo contenido en donde el valor del encabezado es html
// response. end es el final con el body

server.listen(3000, ()=> {
    console.log(`server running at http://localhost:3000`)
})

// le pasamos el puerto que queremos que escuche, mandar la data a este proceso
//pasamos un segundo argumento con una callback function y dentro de la funcion
