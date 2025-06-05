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
