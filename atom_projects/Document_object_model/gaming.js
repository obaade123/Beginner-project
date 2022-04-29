//Restart Game button
var restart = document.querySelector('#b')

//Grab all the Squares

var squares = document.querySelectorAll('td')

//Clear all the squares

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener("click", clearBoard)

//check the Squares

function clickMaker() {
if (this.textContent === " ") {
  this.textContent = "x"
}else if (this.textContent === "x") {
  this.textContent = "o"
}else {
  this.textContent = " "
}
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", clickMaker)
}

// var tx = document.querySelector("#one")
//
// my.addEventListener("click", function() {
// if (tx.textContent === "") {
//   tx.textContent = "x"
// }else if (my.textContent === "x") {
//   tx.textContent = "o"
// } else{
//   tx.textContent = ""
// }
// })
//
// })
