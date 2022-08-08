let num1 = 10
let num2 = 20
//LOGICAL OPERATORS
let num3 = "10"
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2); //less than
console.log(num1 > num2); //greater than
console.log(num1 <= num2); //less than or equal to
console.log(num1 >= num2); //greater than or equal to 
console.log(!true); //not true
console.log(!false); //not false.  ! means not
console.log(num1 == num3);
console.log(num1 === num3); // equality check
console.log(word1 === word2); 
console.log(word1 != word2);  //not equal to 

CONTROL FLOW
let item = "U2";
if (item === "Annapurna") {
    console.log("Buy Annapurna");
} else if (item === "U2"){
    console.log("Buy U2");
} else {
    console.log("Buy Rocky Salt")
}

// Grading System
let score = 100;
if (score >= 0 && score <= 100) {
if (score>= 90) {
    console.log("Excellent");
} else if (score >= 80) {
    console.log("Very Good");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 60) {
    console.log("Average");
} else if (score >= 50) {
    console.log("Credit");
} else if (score >= 40) {
    console.log ("pass");
}else if (score >= 0) {
    console.log ("Fail");
}
}

FUNCTION
function sum(a, b) {
    let total = a + b;
    return total;
}


let eleven = sum(5, 6);
let fifteen = sum(7, 8);
let nineteen = sum(9, 10);
console.log(eleven);

function multiply(a, b) {
    let total = a * b;
    return total;
}

let twelve = multiply(2, 6);
let fourteen = multiply(7, 2);
let twenty = multiply(2, 10);
console.log(multiply(7, 2))

// LOOPS
for (let i = 1;i <= 10; i++) {
    console.log(i + ".I will get through this");
}

// while loop
let num = 1;
while (num <= 10) {
    console.log(num);

    num = num + 1;
}

// do while loop
let age = 1;
do {
    console.log(".You can't vote");
    age++;
} while (age < 18);

// Array methods
let ages = [19, 26, 24, 18, 22, 35, 30, 33, 31, 29];

for (let age in ages) {
    console.log(Math.pow(age, 2));
}

// Filter
let marriage = ages.filter(function (mark) {
    console.log(marriage);
})
let marriage = ages.filter((num) => num > 25);
console.log(marriage);

// map
let squares = ages.map((age) => age * age);
console.log(squares);

// find
let eighteen = ages.find((age) => age === 18);
console.log(eighteen);
