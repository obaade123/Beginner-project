alert("Welcome to website.")
var firstname= prompt("Hello and Welcome. Please enter your First Name:")
var lastname = prompt("Please enter your Last Name:")
var age = prompt("How old are you?:")
var height = prompt("How tall are you in centimeters?:")
var pets = prompt("What is the name of your pet?:")
alert("Thank you for supplying the details")

var namecond = null;
var agecond = null;
var heightcond = null;
var petcond = null;

if (firstname[0] === lastname[0]) {
  namecond = true
}else {
  namecond = false
}

if (age > 20 && age < 30) {
  agecond = true
}else {
  agecond = false
}

if (height >= 170) {
  heightcond = true
}else {
  heightcond = false
}

if (pets[pets.length-1] === "y") {
  petcond =true
}else {
  petcond= false
}
if (namecond && agecond && heightcond && petcond) {
  console.log("Spy detected");
}else {
  console.log("A bloody civilian");
}
