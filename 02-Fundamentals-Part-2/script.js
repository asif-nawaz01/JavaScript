// Activating Strict mode

let hasDriveringLicence = false;
const passTest = true;

if (passTest) hasDriveringLicence = true;
if (hasDriveringLicence) console.log('I can drive : D');

// const interface = 'Audio';
// const private = 534;



//*********FUNCTIONS***********

function logger(){
    console.log('My name is Shiferd');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5,0);
console.log(applejuice);

const appleOrange = fruitProcessor(10,5);
console.log(appleOrange);
