// 'use strict';

// // CONSTRUCTOR FUNCTION AND NEW OPERATOR
// const Person = function(firstName, birthYear) {
//     // Instances properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never to this
//     //this.calcAge = function(){
//     //   console.log(2025 - birthYear);
//     // };
// };

// const Aashu = new Person('Aashu', 2003);
// console.log(Anshu);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const Nawaz = new Person('Nawaz', 2003);
// const Shrii = new Person('Shrii', 2005);
// console.log(Nawaz, Shrii);

// console.log(Aashu instanceof Person);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// PROTOTYPES
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

Aashu.calcAge();
Nawaz.calcAge();

console.log(Aashu.__proto__);
console.log(Nawaz.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Aashu));
console.log(Person.prototype.isPrototypeOf(Riyanshu));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'XOXO Sapiens';
console.log(Aashu.species, Nawaz.species);

console.log(Aashu.hasOwnProperty('firstName'));
console.log(Nawaz.hasOwnProperty('species'));
