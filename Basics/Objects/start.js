// Literals and properties
let user = {
    name: 'John',
    age: 30
};
console.log(user.name); // John
console.log(user.age); // 30

// Object with const can be changed
const user1 = {
    name: 'Bin'
};
user1.name = 'Cuong';
console.log(user1.name);

// Property value shorthand
function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
}

let user2 = makeUser('Bin', 30);
console.log(user2); // Bin

// Property existence test, "in" operator
let user3 = {
    name: 'Hog',
    age: 13
};
console.log(user3.noSuchProperty === undefined); // true
console.log('name' in user3); // true
console.log('2323' in user3); // false

// The "for...in" loop
let user4 = {
    name: 'John',
    age: 30,
    isAdmin: true
}

for (const key in user4) {
    console.log(key);
    console.log(user4[key]);
}

// Ordered like an object
let codes = {
    '42': 'Germany',
    '40': 'Switzerland',
    '1': 'VN'
}

for (let codesKey in codes) {
    console.log(codesKey); // 1 40 42
}

// Check for emptiness
function isEmpty(obj) {
    for (const key in obj) {
        // If the loop has started, there is a property
        return false;
    }
    return true;
}

console.log(isEmpty({'Bin': 1})) // false
console.log(isEmpty({})) // true

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumSalaries(obj) {
    let sum = 0;
    for (const key in obj) {
        sum += obj[key];
    }
    return sum
}

console.log(sumSalaries(salaries)) // 390

// Multiply numeric properties by 2
let menu = {
    width: 200,
    height: 300,
    title: 'My Menu'
};

function multiplyNumeric(obj) {
    for (const objKey in obj) {
        if (typeof obj[objKey] == 'number') {
            obj[objKey] *= 2
        }
    }
    return obj
}

console.log(multiplyNumeric(menu))

// Cloning and merging, Object.assign
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
let user5 = {
    name: 'John'
};

let permission1 = {
    canView: true
};

let permission2 = {
    canEdit: true
}
Object.assign(user5, permission1, permission2);
console.log(user5);