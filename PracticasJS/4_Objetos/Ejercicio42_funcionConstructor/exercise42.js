function smartphone (brand, name, price){
    this.brand = brand;
    this.name = name;
    this.price = price;
}

const iphone = new smartphone ("apple", "Iphone x", 2000)
const galaxy = new smartphone ("samsung", "Galaxy", 1500)

 console.log(iphone)
 console.log (galaxy)