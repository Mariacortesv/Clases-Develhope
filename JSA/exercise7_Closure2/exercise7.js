function printname(){
    let helloName = "Hello John";
    function inner(){
        return helloName;
    }
    return inner;
}

let nombre = printname();

setTimeout(function() {
    console.log(nombre());
  }, 1000);
