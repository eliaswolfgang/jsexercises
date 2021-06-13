// Swap two variables
let a = 'red';
let b = 'blue';
// We need a third variable to store the initial value of one of our variables...
function swap(x, y) {
    let temp = x
    x = y
    y = temp;
    return [x, y]
}
console.log(swap(a, b));

// Simple for loop
for (i = 0; i < 5; i++) {
    console.log(`This is the ${i + 1} time I've said hi!`);
};

// Simple while loop
let n = 0;
while (n <= 5) {
    n % 2 !== 0 ? console.log(`${n} is odd`) : console.log(`${n} is even`);
    n++;
};

// Difference between for...in and for...of;
const person = {
    name: 'Ian',
    age: 26
};

for (let key in person) {
    console.log(key, person[key]);
};

const colors = ['red', 'blue', 'green'];
for (let color of colors) {
    console.log(color)
};

// for...in is used to get the keys of an object (or indeces of an array) - use on objects!
// for...of returns the values of those keys (or indeces) - but can only be used on iterables like arrays!

// fizzBuzz algorithm
// If a number is divisble by 3, return Fizz; if divisible by 5, return Buzz; if the number is not divisible by either, return the input
// If the input is not a number, return Not a number

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;
    } else if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    } else if (input % 3 === 0) {
        return 'Fizz';
    } else if (input % 5 === 0) {
        return 'Buzz';
    } else {
        return input;
    }
}
console.log(fizzBuzz(3), fizzBuzz(5), fizzBuzz(15), fizzBuzz(17), fizzBuzz('Hello!'));

// Speed limit exercise
// The speed limit is 70 mph; if a driver's speed is <= 70, return OK
// Every 5 mph over the speed limit, add 1 point
// If a driver has 12 or more points, return License suspended
// Use Math.floor() to round points to the nearest integer


function checkSpeed(speed) {
    const speedLimit = 70
    if (speed <= speedLimit) return 'OK';
    if (speed > speedLimit) {
        const points = (speed - speedLimit) / 5
        if (points >= 12) {
            return 'License suspended'
        } else if (points < 1) {
            return 'OK';
        } else {
            return Math.floor(points);
        }
    }
};
console.log(checkSpeed(50), checkSpeed(72), checkSpeed(75), checkSpeed(150));


function countTruthy(array) {
    let count = 0
    for (let i=0; i < array.length; i++) {
        if (array[i]) count++
    }
    return count
};

console.log(countTruthy([0, null, undefined, '', 2, 3]));

// Nested for loop (algorithm to display same number of stars as the row number)
function showStars(rows) {
   for (let row = 1; row <= rows; row++) {
    let stars = '';
        for (let i=0; i < row; i++) {
            stars += '*';
        } 
        console.log(stars);
    }
};

showStars(1), showStars(2), showStars(5);


