var headOne = document.querySelector("#one")
var headTwo = document.querySelector("#two")
var headThree = document.querySelector("#three")

headOne.addEventListener('mouseover',function(){
  headOne.textContent = "mouse currently over";
  headOne.style.color = "red"
})

headOne.addEventListener("mouseout",function(){
  headone.textContent = "HOVER OVER ME";
  headOne.style.color = "black";
})
