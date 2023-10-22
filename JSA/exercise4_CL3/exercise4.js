function sumUntil(maxValue) {
  let suma = 0;
  for (let i = 1; i <= maxValue; i++){
    suma = suma + i;
  }
  return suma;
}

console.log(sumUntil(5));