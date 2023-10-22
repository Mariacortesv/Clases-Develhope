function multiplyByTwo(value) {
  let number = 2;

  function inner(number2){
    return value * number;
  }
  return inner;
}

let resultado = multiplyByTwo(4)();

console.log(resultado)