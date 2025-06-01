 let js ='amazing';
    if (js==="amazing") 
    console.log(40+8+13-10);
    
console.log("Nawaz");
console.log('143');
    
//****** values & variables******

let firstName = "Asif";
let first = 'Nawaz';

console.log(firstName);
console.log(first);
console.log(firstName);

let Asif_Nawaz = "AN";
let _new = 77;
let name = "Nawaz";

// Variables Name Conventions

let person = 'Nawaz'
let PI = 3.1415;
let myFisrtJob = "programmer";
let myCurrentJob = "Teacher";

let Job1 = 'programmer';
let Job2 = 'Teacher';
let $function = 37;

console.log(myCurrentJob);

let Country = "India";
let Continent = "Asia";
let population = "4.500 M";

console.log("Continent is " + Continent);
console.log("Country is " + Country);
console.log("The population is " + population);

// *****DataTypes in JavaScript ******

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'Asif');
console.log(typeof 37);

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof Country);
console.log(typeof language);

javascriptIsFun = "Yes!"
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// *********Types of Declearing a variables*******

let age = 22;
age = 23;

const birthYear = 2003;

var job = 'Programmer';
job = 'Teacher';

lastName = 'Nawaz';
console.log(lastName);

// ********Basics Operators******

const now = 2037;
const ageVikky = now -1991;
const ageRaj = now - 2018;
console.log(ageVikky, ageRaj);

console.log(ageVikky*2, ageVikky/10, 2**3);
// 2**3 means that the 2 to the power of 3 which is equal to 2 * 2 * 2

const first_Name = "Asif";
const last_Name = "Nawaz";
console.log(first_Name + " " + last_Name);

// *******Assignment Operators******

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1 = 101
x--;
x--;
console.log(x);

// *******Comparision Assignment*****

console.log(ageVikky > ageRaj); // >,<,>=,<=
console.log(ageRaj >= 18);

const isFullAge = ageRaj >= 18;

console.log(now - 1991 > now - 2019);

let a , b;
a=y=25-10-5; // a=10, b=10;
console.log(a,y);

const averageAge = (ageVikky + ageRaj)/2;
console.log(ageVikky, ageRaj, averageAge);

// const description = 'Indians is in India, and its 143 Million people speak Hindi';

// ******Challenges #1********

//*****Question_01******
const massMark = 78;
const heightMark =1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark,BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

//*******Question_02********

const marksWeight2 = 95;
const marksHeight2 = 1.88;

const johnWeight2 = 85;
const JohnHeight2 = 1.76;

let markBMI2 = marksWeight2/(marksHeight2 ** 2);
let johnBMI2 = johnWeight2/(JohnHeight2 ** 2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markBMI2, johnBMI2, markHigherBMI2);

//Strings 
const Name = "Nawaz";
const Job = "Programmer";
const birtYear = 2003;
const Year = 2025;

const jonas = "I am " + firstName + ", a " + (Year - birtYear) + " years old person, with a profession of " + Job;
console.log(jonas);

const jonasNew = `I am ${firstName}, a ${Year - birtYear} years old ${Job}`;
console.log(jonasNew);

console.log(`Just a normal String......`);

console.log('String with \n multiple\n line');
console.log(`This is a
multiple line 
comment`);
