// Factory vs Constructor Functions

function createCircle(radius, location) {
    return {
        radius: radius,
        location: location,
        draw() {
         console.log('Drawing circle')
        }
    };
};
const myCircle = createCircle(1, {x:0, y:0});

function Circle(radius, location) {
    this.radius = radius,
    this.location = location,
    this.draw = () => {
        console.log('Drawing circle')
    }
}
const Circle1 = new Circle(4, {x: 4, y: 8});

// Remember that reference types are more dynamic! Reference types are copied by reference, while value types are copied by value.
// let x = 10;
// const y = x;

// x = 20 // Here, y will still be 10 because it is a Number literal, so it only copies the original value assigned to x

// let x2 = {value: 10};
// const y2 = x2;

// x2.value = 20 // Here, y will log the object { value: 20 }, because x2 is an object. Changes made to it will be copied via reference!

// Review of for...in and for...of
const anotherCircle = {
    radius: 1,
    draw2: () => {
        console.log('Drawing circle!')
    }
}

for (let key in anotherCircle) {
    console.log(anotherCircle[key])
};
// Above is equivalent to below 
for (let key of Object.keys(anotherCircle)) {
    console.log(key)
}
// In keyword allows you to test the methods and properties of an object

// Spread operator! This is the simplest way to clone an object in native JS

const circleThree = { ...anotherCircle }

// Exercise 1: Create two address objects, one with a show method which logs the address' street, city, and zipCode to the console
// Call the show method on both addresses

// BONUS: Code the show method in such a way that you could pass any number of address into it, and each would log its properties to the console
const address = {
    street: '4036 Locust St, 301',
    city: 'Kansas City, MO',
    zipCode: 64110,
    show: (addresses) => {
        addresses.forEach((a) => console.log(a.street, a.city, a.zipCode))
    }
};

const address2 = {
    street: '100 Main St',
    city: 'Hutchison, KS',
    zipCode: 41550
}

address.show([address, address2]);

// Exercise 2: Write a Post constructor function, given the below implementation
// Bonus: Write a function which logs each comment in post1 and the author of each comment to the console


function Post(title, author, body, views, comments, isPublished) {
    this.title = title,
    this.author = author,
    this.body = body,
    this.views = views,
    this.comments = comments,
    this.isPublished = isPublished
}

const post1 = new Post(
    'Hello world!',
    'Me',
    'Hi world!, this is my first blog post!',
    128,
    [{comment: 'Nice', author: 'Steve'}, {comment: 'Whoa! Cool!', author: 'Gina'}],
    false
);

function logComments(post) {
    post.comments.forEach((comment) => {
        console.log(comment.comment, comment.author)
    })
}

logComments(post1);