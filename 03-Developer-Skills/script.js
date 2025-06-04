// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
if (x == 23) console.log(23);

const calcAge = birthYear => 2025 - birthYear;

console.log();



//_______PROBLEM 1___________

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {

    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

