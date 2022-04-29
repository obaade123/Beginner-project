// function helloYou (name){
//   console.log("Hello " +name);
// }
// function addNum (num1, num2){
//   console.log(num1 + num2);
// }
// function helloSomeone(name="Adeoba"){
//   console.log("Hello " +name);
// }
// function formal(name="Adeoba", title="Sir") {
//   console.log(title + " " + name);
// }
// function formal(name="Adeoba", title="Sir") {
//   return title+" "+name
// }
function timesfive(numInput) {
  var result = numInput * 5
  return result
}
// Global scope
var v = "Global V"
vaar stuff = "Global stuff"

function fun(stuff) {
console.log(v);
stuff = "Reassign stuff inside func"
console.log(stuff);
}
