# Classes

Create a class called Developer. The Developer class has to inherit the Person class created in the previous exercise. The Developer class takes in another argument in the constructor method (role).

class Person {
constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}
}

const developer = new Developer("Mario", "Rossi", "Front-end");
console.log(developer.firstName + " " + developer.lastName + " " + developer.role);
