class Person {
  constructor (firstName, lastName, age){
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  get firstName(){
    return this._firstName;
  }
  set firstName(newFirstName){
    if (newFirstName === ''){
      this._firstName = 'Create Name';
    } else {
      this._firstName = newFirstName;
    }
  }

    get lastName(){
      return this._lastName;
    }

    set lastName(newLastName){
      if (newLastName === ''){
        this._lastame = 'Create Last Name';
      } else {
        this._lastName = newLastName;
      }
    }

    get age(){
      return this._age
    }
    set age(newAge){
      if (newAge < 1 ){
      this._age = 1;
    } else if (newAge>100){
      this._age = 100;
    } else{
      this._age = newAge;
    }
    } 

    get fullName(){
      return this._firstName + " " + this._lastName;
    }
  }


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);