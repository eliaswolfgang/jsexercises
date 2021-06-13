// Arrays!

let numbers1 = [1, 2, 3, 4];

numbers1.push(5, 6);

numbers1.unshift(0);

console.log(numbers1.indexOf(0));
console.log(numbers1.indexOf(3, 4));
console.log(numbers1.includes(6));

const courses = [
    {id: 1, name: 'HTML5'},
    {id: 2, name: 'JavaScript'},
    {id: 3, name: 'CSS3'}
];

let found = courses.find(el => el.id = 1);
console.log(found);

// Sorting objects!!! VERY important. Note how this returns a new array
courses.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0
});
// You could also use toLowercase or toUppercase to check for case sensitivity
// Note how this filter method also returns a new array
const filtered = courses.filter((c) => c.id >= 2)
console.log(courses);
console.log(filtered);

const mapped = filtered.map((i) => {
    return {value: i.id}
});
console.log(mapped);

let last = numbers1.pop();
console.log(last);
let first = numbers1.shift();
console.log(first);
let middle2 = numbers1.splice(3, 2);
console.log(middle2);
// To empty the array, simply set the initial variable equal to an empty array
numbers1 = [];
console.log(numbers1);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
// Reduce method takes the arguments of an accumulator and currentValue, and the initialValue to begin reducing
const sum = combined.reduce((a, b) => a + b);
console.log(sum);

const sliced = combined.slice(3);
console.log(sliced);
// Spread operator
const combined2 = [...arr1, 'inserted', ...arr2]; // Same as combined, with an inserted string
console.log(combined2);

combined2.forEach((n) => {
    if (typeof n === 'string') console.log(`String detected at ${combined2.indexOf(n)}`);
});

const message = 'Hello again world';
// Notice how this returns an array and then a string literal
const split = message.split(' ');
const splitJoin = message.split(' ').join('-');
console.log(split, splitJoin);

// Moving elements in an array

function move(array, index, offset) {
    const position = index + offset;
    const newArr = [...array];
    const selected = newArr.splice(index, 1)[0];
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    newArr.splice(position, selected);
    return newArr
}

console.log(move(combined, 0, 4));