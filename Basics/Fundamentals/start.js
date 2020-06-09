let year = 2015;
if (year < 2015) {
    console.log('Too early');
} else if (year > 2015) {
    console.log('Too late');
} else {
    console.log('Exactly');
} // Exactly

let age = 18;
let accessAllowed = age > 18;  // equals to = (age > 18) ? true : false
console.log(accessAllowed) // false

// Multiple '?'
let age_2 = 20;
let message = (age_2 < 3) ? 'Hi, baby!'
    : (age < 18) ? 'Hello'
        : (age < 100) ? 'Greetings'
            : 'What an unusual age!';
console.log(message); // Greetings

// Nullish coalescing operator '??'
// x = (a !== null && a !== undefined) ? a : b;
let firstName = null;
let lastName = null;
let nickName = 'SuperCoder?';

console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); // SuperCoder

// Comparison with ||
// || returns the first truthy value
// ?? returns the first defined value
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

// Loops: while and for
// The 'while' loop
let i = 0;
while (i < 3) {
    console.log(i); // 0 1 2
    i++;
}

let z = 3;
while (z) {
    console.log(z); // 3 2 1
    z--;
}

// The 'do...while' loop
let x1 = 0;
do {
    console.log(x1); // 0 1 2
    x1++;
} while (x1 < 3);

// The 'for' loop
for (let i = 0; i < 3; i++) {
    console.log(i); // 0 1 2
}

// Breaking the loop
// let sum = 0;
// while (true) {
//     // let value = +prompt('Enter a number', '');
//     if (!value) break;
//     sum += value;
// }
// console.log('Sum: ' + sum);

for (let j = 0; j < 10; j++) {
    // If true, skip the remaining part of the body
    if (j % 2 === 0) continue;
    console.log(j); // 1 3 5 7 9
}

// The 'switch' statement
let a = 2 + 2;
switch (a) {
    case 3:
        console.log('Too small');
        break;
    case 4:
        console.log('Exactly'); // Here
        break;
    case 5:
        console.log('Too large');
        break;
    default:
        console.log('I don\'t know such values ');
}

let b = '1';
let c = 0;

switch (+b) {
    case c + 1:
        console.log('This runs, because +b is 1, exactly equals c + 1');
        break;
    default:
        console.log('This doesn\'t run');
}

// Function Declaration
function showMessage() {
    let message = 'Hello, I\'m JS'; // local variable
    console.log(message);
}

showMessage(); // Hello, I'm JS

// Outer variables
let userName = 'John';

function showName() {
    userName = 'Bob'; // Changed the outer variable
    let message = 'Hello ' + userName;
    console.log(message);
}

console.log(userName); // John before the function call.
showName(); // Hello John.
console.log(userName) // Bon, the value was modified by the function.

function showCount(count) {
    console.log(count ?? 'unknown');
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log(result); // 3

function checkAge(age) {
    return age >= 18;
}

let myAge = 6;
if (checkAge(myAge)) {
    console.log('Access granted');
} else {
    console.log('Access denied'); // This one
}

// Function expressions
let sayHi = function () {
    console.log('Hello');
};
sayHi();

// Callback functions
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

// function showOk() {
//     console.log('You agreed.');
// }
//
// function showCancel() {
//     console.log('You canceled the execution');
// }
//
// ask('Do you agree?', showOk, showCancel);
// The arguments showOk and showCancel of ask are called callback functions or just callbacks.
// ask(
//     'Do you agree?',
//     function () {
//         console.log('You agreed!');
//     },
//     function () {
//         console.log('You canceled the execution!');
//     }
// )

// Arrow functions
let sum_1 = (a, b) => a + b;
console.log(sum_1(1, 3)); // 4

let double = n => n * 2; // Only one argument
console.log(double(3)); // 6

let sayHello = () => console.log('Hello'); // No arguments
sayHello(); // Hello

let age_1 = prompt('What is your age?', 18);
let welcome = (age_1 < 18) ?
    () => console.log('Hello') :
    () => console.log('Greetings!');
welcome(); // Greetings

// Multiline arrow functions
let sum_2 = (a, b) => {
    return a + b;
}
console.log(sum_2(1, 2)); // 3

let pow = (x, n) => {
    if (x < 0) {
        console.log('Can\'t be a negative number');
    } else {
        let result = 1;
        for (let j = 0; j < n; j++) {
            result *= x;
        }
        return result;
    }
}

console.log(pow(3, 4)); // 81

// Taken from a well-known javascript library
p = p ? p < 0 ? Math.max(0, len + p) : p : 0;

