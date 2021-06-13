// Working with functions

// Remember: functional arguments or parameters are dynamic, just like variables in JavaScript.
// Using the arguments object
function argSum() {
    let total = 0;
    for (let a of arguments) {
        total += a
    };
    return total;
}

console.log(argSum(1, 2, 3, 4, 5, 6, 10));

// Using the rest operator to turn the arguments object into an array

function restSum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(restSum(1, 2, 3, 4, 5, 6, 10));

// First argument of this function is the percent to be discounted, the rest of the arguments are the prices of the items

function discountSum(percent, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - (percent * .01));
}

// You could also apply the discount to each item individually

function indSum(percent, ...prices) {
    let total = 0
    prices.forEach((p) => {
        let discount = (percent / 100) * p;
        let newPrice = p - discount;
        total += newPrice;
    });
    return total;
}

console.log(discountSum(10, 24.99, 39.99, 50));
console.log(indSum(10, 24.99, 39.99, 50));

// Getters vs Setters with Objects

const person = {
    firstName: 'Ian',
    lastName: 'VonFange',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(name) {
        const split = name.split(' ');
        this.firstName = split[0];
        this.lastName = split[1];
    }
}

console.log(person.fullName);

person.fullName = 'John Smith'

console.log(`Changed: ${person.fullName}`);

// The this keyword references the object if it is used in a method of that object!

const video = {
    title: 'ABC',
    play() {
        console.log(this); // the video object will be returned
    }
}
// The value of this is not changed when passed through arrow functions!

const viralVideo = {
    title: 'ABC',
    tags: ['a, b, c, d'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag)
        })
    }
}

function playVideo() {
    console.log(this);
}

// playVideo.call({ name: 'Ian' }, 1, 2); // Call method changes this
// playVideo.apply({ name: 'Ian' }, [1, 2]) // So does apply
// playVideo.bind({ name: 'Ian' }, fn()) // So does bind, as well to executing a bound function

// Exercises!!

// Write a function which can take numbers or an array of numbers in and returns their sum
// The rest operator returns an array of arrays (one array for each argument)

// function sum(items) {
//     for (i = 0; i < items.length; i++) {
//         if (Array.isArray(items[i])) {
//             let arrItems = items.splice(items[i])
//             let arrSum = arrItems.reduce((a, b) => a + b);
//         }        
//     }
// }

// console.log(sum(1, 2, 3, [1, 2, 3, 4, 5]))