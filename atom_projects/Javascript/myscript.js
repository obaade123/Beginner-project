// for (var i = 0; i <5; i++) {
// console.log(i);
// }
// var word = "ABCDEFGW";
// for (var i = 0; i < word.length; i=i+2) {
//   console.log(word[i]);
// }

// var num = 1;
// while (num < 11) {
//   if (num%2 === 0) {
//     console.log(num);
//   }
//   num= num + 1
// }

// var x = 0
// while (x <=10) {
//   console.log("x is currently:" +x);
//   console.log("x is still less than or equal to 10, adding 2 to x");
//
//   x= x+2
// }

// var x = 0
//
// while (x < 5) {
//   console.log("x is currently:"+x);
//   if (x===3) {
//     console.log("x is equal to 3");
//     break;
//   }
//   console.log("x is still less than 5, adding 1 to x");
//
//   x = x+1
// }

// var ham = 0
// var cheese = 0
// var report = "blank"
//
// if (ham >= 10 && cheese >= 10) {
// report = "strong sales of both ham and cheese"
// }else if (ham === 0 && cheese === 0) {
//   report = "Nothing sold"
// }else {
// report = "we had some sales of items"
// }
// console.log(report);

// control statement
// var hot = false
// var temp = 100
// if (temp > 80) {
// console.log("Hot outside");
// }else if (temp <= 80 && temp >= 50 ) {
//   console.log("Average temperature outside");
// }else if (temp < 50 && temp >= 32) {
//   console.log("Its pretty cold out");
// }else {
//   console.log("Its very cold out");
// }
//
// alert("Welcome to my Bank!")
// var deposit = prompt("How much would you like to deposit?")
// alert("You have deposited:"+deposit)
// console.log("You are a cool person!")

// var weight = prompt("What is the weight in pounds(ibs)?")
// alert("This measures:" +weight*0.454)
// console.log("conversion Completed")
//
var lbs = prompt("What is the weight in pounds(ibs)?");
var kg = lbs*0.454;
alert("This measures: "+kg+" kilograms");
console.log("conversion Completed");
