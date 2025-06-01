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

// ******if and else block*******

const Age = 16;
const isOldEnough = Age >= 18;

if (isOldEnough) {
    console.log("You are Eligible for  driving License");
} else {
    console.log("You are Eligible for driving License after " + (18 - age) + " years");
}


let century;
const BirthYear = 2003;
if (BirthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//******Challenges_02 Based on _01 ******

const MarksWeight2 = 95;
const MarksHeight2 = 1.88;

const JohnWeight2 = 85;
// const JohnHeight2 = 1.76;

let MarkBMI2 = MarksWeight2/(MarksHeight2 ** 2);
let JohnBMI2 = johnWeight2/(JohnHeight2 ** 2);

let MarkHigherBMI2 = MarkBMI2 > JohnBMI2;
console.log(MarkBMI2, JohnBMI2, MarkHigherBMI2);

if (JohnBMI2 > MarkBMI2) {
    console.log("John has a higher BMI index (" + JohnBMI2 + ") than marks BMI (" + MarkBMI2 + ")");
} else {
    console.log("Mark has a higher BMI index (" + MarkBMI2 + ") than Johns BMI (" + JohnBMI2 + ")");
}

//****Type conversion******

const inputYear = '1991' ;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Nawaz'));
console.log(typeof NaN)

console.log(String(23), 23);

//********Type coercion********

console.log('I am ' + 21 + ' years old');
console.log('23' - '10'- 3);
console.log('23' + '10'+ 3);
console.log('23' * '10');
console.log('23' / '10');
console.log('23' % '10');

let n = '1'+ 1;
n = n -1;
console.log(n);

console.log( 2+3+4 +'5');
console.log('10'-'4'-'3'-2+'5');


//****** 5 falsy values -->  0, null, ' ', undefined, NaN******

const Fund = 100;
if(Fund) {
    console.log("Don't spend it all");
}else {
    console.log('You should get a job!');
}

let height = 5.9;
if(height) {
    console.log('Yor are eligible Now ');
}else {
    console.log('Height is UNNDEFINED');
}

// ******equality Operators******

const _age = '18';
if (_age === 18) {
    console.log("You just became an adult : D(Strict)");
} 

if (age == 18) {
    console.log("You just Became an Adult : D(Loose)");
}

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // 22 === 23 -> FALSE
    console.log('cool! 23 is amazing number!');
} else if(favourite==7) {
    console.log('7 is a cool number');
}else{
    console.log('Number is not 23 or 7')
}

if (favourite !==23) console.log('Why not 23!');


//*******logical operators*********

//*****AND Operator ******

const hasDriveringLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriveringLicense && hasGoodVision);
console.log(hasDriveringLicense || hasGoodVision);

if (hasDriveringLicense && hasGoodVision) {
    console.log('Nawaz is able to drive!');
}else{
    console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriveringLicense && hasGoodVision && isTired);

if (hasDriveringLicense && hasGoodVision && isTired) {
    console.log('Nawaz is able to drive!');
}else{
    console.log('Someone else should drive...');
}

// *********Coding Challenges_03*******

const scoreDolphins = (97+112+80)/3;
const scoreKoalas = (100+95+50)/3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');

} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else if (scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100);
else {
    console.log('No one win the trophy');
}

//********Switch Statement *********

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan Your schedule');
    console.log('Arrange a  meetup');
    break;
  case 'tuesday':
    console.log('Prepare for your work');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write solutions');
    break;
  case 'friday':
    console.log('Record Your Data');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
} 

if (day === 'monday') {
  console.log('Plan Your schedule');
  console.log('Arrange a  meetup');
} else if (day === 'tuesday') {
  console.log('Prepare for your work');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write solutions');
} else if (day === 'friday') {
  console.log('Record Your Datas');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

//**********Statements and Expression********

3 + 4
1991
true && false && !false

if (23>10) {
    const str = '23 is bigger';
}
const me ='Nawaz';
console.log(`I'm ${2025-2005} years old ${me}`);



// ********The Conditional (Ternary) Operator********

const _Age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = Age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (_Age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${_Age >= 18 ? 'wine' : 'water'}`);



//********Challenges 04*********

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


                       //**********Fundamentals 01 Completed **************/
