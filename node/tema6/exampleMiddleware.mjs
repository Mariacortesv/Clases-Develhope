import express from "express";

/* //como usar las callback para pocesar las slicitudes HTTP ebtrabtes y 
enviar respuestas, los middleware haran que las cosas pasen, con handlers
pasamos las callbacks como un argumento en app.use */

const app = express();

//setHeader Middleware
app.use(function setHeaderMiddleware(request, response, next) {
  console.log("called: setHeaderMiddleware");

  response.setHeader("X-Custom-Header", "1234");
  next();
});

/* //middelware with an error, se pasa directamente en next, luego crear 
un error handler middleware que se agrega despues de todo los otros middlware */
app.use(function middlewareWithAnError(request, response, next) {
  console.log("called: middlewareWithAnError");

  next(new Error("there has been an error"));
});

//sendData Middleware
app.use(function sendDataMiddleware(request, response, next) {
  console.log("called: sendDataMiddleware");

  response.json({ data: "this is some data" });

  next();
});

// middleware handler error al final, para que handle cualquier error que pase
app.use(function errorHandlerMiddleware(error, request, response, next){
    console.log("called: errorHandlerMiddleware");
    
    response.status(500);

    response.json({ message: error.message });

    next();
})

app.listen(3000);

//salta directamente al error ya que esta el error en el segundo
