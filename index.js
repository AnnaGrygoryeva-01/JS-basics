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
console.log(typeof 11);
console.log(typeof true);
console.log(typeof "java script");
console.log(typeof "100");

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
let userResponce1 = +prompt("What is the first number?");
alert("The square of your number is: " + userResponce1 ** 2);

//2
let userResponce2 = +prompt("What is the first number?");
let userResponce3 = +prompt("What is the second number?");
alert("The average of your numbers is: " + (userResponce2 + userResponce3) / 2);

//3
let userResponce4 = +prompt("Specify the number of minutes:");
alert(userResponce4 + " minutes is " + userResponce4 * 60 + " seconds");

//4
let greetings = "Hello, ";
let userName = prompt("What is your name?");
alert(greetings + userName + "!");
