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

// Nested cloning
let user6 = {
    name: 'Cuong',
    sizes: {
        height: 182,
        width: 3
    }
}
console.log(user6.sizes.height); // 182

let clone = Object.assign({}, user6);
console.log(user6.sizes === clone.sizes); // true
user6.sizes.width++;
console.log(clone.sizes.width); // 4

// "this" in methods
// To access the object, a method can use the this keyword.
let user7 = {
    name: 'Cuong',
    age: 30,
    sayHi() {
        console.log(this.name);
    }
}
user7.sayHi(); // Cuong

// Constructor function
// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.

// Constructor functions should only be called using new.
function User(name) {
    this.name = name;
    this.isAdmin = false;
    this.sayHello = function () {
        console.log('My name is: ' + this.name);
    }
}
let user8 = new User('Bin');
console.log(user8.name); // Bin
console.log(user8.isAdmin); // false
user8.sayHello(); // My name is: Bin

// Create new Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('How much to add?', 0);
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);