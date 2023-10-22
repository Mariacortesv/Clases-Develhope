function printname(){
    let helloName = "Hello John";
    function inner(){
        return helloName;
    }
    return inner;
}

let nombre = printname();

console.log(nombre())