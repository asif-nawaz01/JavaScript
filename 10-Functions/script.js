'use strict';

// DEFAULT PARAMETERS

const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers
) {
    //ES5
    //numPassengers = numPassengers || 1;
    //price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


// HOW PASSING ARGUMENTS WORKS: VALUE(Yes) vs REFERENCE(No)

const flight = 'LH234';
const Anshu = {
    name: 'Shrii Mishra',
    passport: 1234567890,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mrs.' + passenger.name;

    if(passenger.passport === 1234567890) {
        alert('Checked in');
    }else{
        alert('Wrong passport');
    }
};


checkIn(flight, Adity);
console.log(flight);
console.log(adii);

//Is the same as doing

const flightNum = flight ;
const passenger = Adity;



const newPassport = function(person) {
    person.passport = Math.trunc(Math.random()* 1000000000);
}; 

newPassport(Adity);
checkIn(flight.Adity);

const oneword = function(str) {
    return str.replace( /  /g, '').toLowerCase();
};

// FUNCTION ACCEPTING CALLBACK FUNCTIONS

const oneWord = function(str) {
    return str.replace(/ /g, ' ').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS callbacks all the time

const high5 = function() {
    console.log('high5');
};
document.body.addEventListener('click', high5);

['Riyanshu', 'Saloni', 'Aisha', 'Supriya'].forEach(high5);


//-------------------------------------------------------------------------------------------------------------------------------------//

// FUNCTION RETURNING FUNCTIONS

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Nawaz');
greeterHey('Shrii');

greet('Hello')('NawaZ');

// CHALLENGE
const greetArr = greeting => Name => console.log(`${greeting} ${Name}`);

greetArr('Hi')('Nawaz');


//-------------------------------------------------------------------------------------------------------------------------------------//

// THE CALL AND APPLY METHODS

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Shrii Mishra');
lufthansa.book(239, 'Sakshi Shrii');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};
