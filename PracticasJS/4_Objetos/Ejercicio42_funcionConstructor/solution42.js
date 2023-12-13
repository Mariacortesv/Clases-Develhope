function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

const iphone = new Smartphone("Apple", "Iphone", 1300);
const galaxy = new Smartphone("Samsung", "Galaxy Z", 800);

console.log(iphone);
console.log(galaxy);
