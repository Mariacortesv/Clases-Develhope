const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

Object.freeze(smartphone);
smartphone.price=200;

const newSmartphone = Object.assign({}, smartphone)
newSmartphone.price = 100;

console.log(smartphone);
console.log(newSmartphone)