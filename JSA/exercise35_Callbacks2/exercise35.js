function repeatHello(callback) {
   setInterval(callback, 1000);
  }
  const hello = () => {
    console.log("Hello");
  };
  
  repeatHello(hello);
  
