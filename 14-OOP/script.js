'use strict';

// CONSTRUCTOR FUNCTION AND NEW OPERATOR
const Person = function(firstName, birthYear) {
    // Instances properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this
    //this.calcAge = function(){
    //   console.log(2025 - birthYear);
    // };
};

const Aashu = new Person('Aashu', 2003);
console.log(Anshu);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const Nawaz = new Person('Nawaz', 2005);
const Shrii = new Person('Shrii', 2005);
console.log(Nawaz, Shrii);

console.log(Aashu instanceof Person);
