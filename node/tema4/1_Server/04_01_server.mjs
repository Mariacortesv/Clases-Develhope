import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request recibido");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    "<html><body><h1>Hola Maria todo funciona con Node.js!</h1></body></html>"
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
