// 1
let a = 5;
let b = 10;
console.log("The result is: ", a * b);

// 2
let c = 78;
let d = 6;
console.log("The result is: ", c / d);

// 3
let e = 45;
let f = 12;
console.log("The result is: ", e + f);

// 4
const numberOfApples = 11;
console.log(numberOfApples);
const isHappy = true;
console.log(isHappy);
const programmingLanguage = "JavaScript";
console.log(programmingLanguage);
const stringNumber = "100";
console.log(stringNumber);

// 5
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;
console.log(num);

/////////////////////////////////////////////////

//1
let userResponceSquare = Number(prompt("What is the first number?"));
alert("The square of your number is: " + userResponceSquare ** 2);

//2
let userResponceFirstNum = Number(prompt("What is the first number?"));
let userResponceSecondNum = Number(prompt("What is the second number?"));
alert(
  "The average of your numbers is: " +
    (userResponceFirstNum + userResponceSecondNum) / 2
);

//3
let userResponceTime = Number(prompt("Specify the number of minutes:"));
alert(userResponceTime + " minutes is " + userResponceTime * 60 + " seconds");

//4
let greetings = "Hello, ";
let userName = prompt("What is your name?");
alert(greetings + userName + "!");
