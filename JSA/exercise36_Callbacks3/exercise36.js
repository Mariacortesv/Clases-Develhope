function repeatHello(callback) {
  let intervalo = setInterval(callback, 1000);
  setTimeout(() => {
    clearInterval(intervalo);
    console.log("5 segundos");
  }, 5000);
}

const hello = () => {
  console.log("Hello");
};

repeatHello(hello);
