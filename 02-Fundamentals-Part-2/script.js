// // // Activating Strict mode

// // let hasDriveringLicence = false;
// // const passTest = true;

// // if (passTest) hasDriveringLicence = true;
// // if (hasDriveringLicence) console.log('I can drive : D');

// // // const interface = 'Audio';
// // // const private = 534;



// // //*********FUNCTIONS***********

// // function logger(){
// //     console.log('My name is Shiferd');
// // }

// // //calling / running / invoking function
// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // const applejuice = fruitProcessor(5,0);
// // console.log(applejuice);

// // const appleOrange = fruitProcessor(10,5);
// // console.log(appleOrange);

// // // ********FUNCTION DECLARATION********

// // const age_1 = calcAge1(2003);

// // function calcAge1(birthYear) {
// //     return 2025 - birthYear;
// // }

// // //Function expression

// // const calcAge_2 = function (birthYear) {
// //     return 2025 - birthYear
// // }
// // const age_2 = calcAge_2(2003);
// // console.log(age_1, age_2);

// // // *******FUNCTION DECLARATION*********
// // const age1 = calcAge1(2003);

// // function calcAge1(birthYear) {
// //     return 2025 - birthYear;
// // }

// // //function expression
// // const calcAge2 = function (birthYear) {
// //     return 2025 - birthYear
// // }
// // const age2 = calcAge2(2003);
// // console.log(age1, age2);

// // //******ARROW FUNCTIONS********

// // const calcAge3 = birthYear => 2025 - birthYear;
// // const age3 = calcAge3(2003);
// // console.log(age3);

// // const yearsUntilRetirement = (birthYear, firstName) => {
// //     const age = 2025 - birthYear;
// //     const retirement = 65 - age;
// //    // return retirement;
// //    return `${firstName} retires in ${retirement} years`;
// // }

// // console.log(yearsUntilRetirement(2003, 'Nawaz'));
// // console.log(yearsUntilRetirement(2000, 'Sabbo'));

// // //****FUNCTIONS CALLING OTHER FUNCTIONS****

// // function cutFruitPieces(fruit) {
// //     return fruit * 4;
// // }
// // function fruitProcessor(apples, oranges) {
// //     const applePieces = cutFruitPieces(apples);
// //     const orangePieces = cutFruitPieces(oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }
// // console.log(fruitProcessor(2,3));

// // //*****REVIEWING FUNCTIONS*****

// // const calcAge = function(birthYear) {
// //     return 2025 - birthYear;
// // }

// // const YearsUntilRetirement = function(birthYear, firstName) {
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0){
// //         console.log(`${firstName} retires in ${retirement} years`);
// //         return retirement;
// //     }else{
// //         return -1;
// //         console.log(`${firstName} has already retired`);
// //     }
// // }
// // yearsUntilRetirement(2005, 'Nawaz');
// // yearsUntilRetirement(2000, 'Sabbo');

// // //******Challenges 01********

// // const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3, 4, 5));

// // // Test 1

// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphins, scoreKoalas);

// // const checkWinner = function (avgDolphins, avgKoalas) {
// //   if (avgDolphins >= 2 * avgKoalas) {
// //     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
// //   } else if (avgKoalas >= 2 * avgDolphins) {
// //     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
// //   } else {
// //     console.log('No team wins...');
// //   }
// // }
// // checkWinner(scoreDolphins, scoreKoalas);

// // checkWinner(543, 111);

// // // Test 2

// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(scoreDolphins, scoreKoalas);
// // checkWinner(scoreDolphins, scoreKoalas);

// // ********ARRAY************

// const friend1 ='Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael','Steven','Peter'];
// console.log(friends);

// const year = new Array(1991, 1984, 2003, 2025);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.lenght);
// console.log(friends[friends.lenght - 1]);

// friends[2] = 'Jay';
// console.log(friends); 

// ________Exercise__________

const calcAge = function (birthYear) {
    return 2025-2000;
}

const year = [1991, 1996, 2000, 2003, 2015] ;

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length -1]);
console.log(age1, age2, age3);
const age = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length -1])];
console.log(age);


// ----------Add elements----------

const friends = ['Nawaz', 'Vikky', 'Aarya'];
const newLength = friends.push('Chikki-Farhan');
console.log(friends);
console.log(newLength);

friends.unshift('Kaaju');
console.log(friends);

// --------Remove elements---------

friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(friends.indexOf('Kaaju'));
friends.shift(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Kaaju'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Chikki-farhan')) {
    console.log('You have a friend called Chikki');
}

 

// __________Challanges 02_________

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [150, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
