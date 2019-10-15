var numSquares = 6;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor()];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset")
var modeBtns = document.querySelectorAll(".mode");

init ();

function init(){
  setUpModeBtns();
  setUpSquares();
  reset();
}

function setUpModeBtns() {
  for(var i=0; i < modeBtns.length; i++){
    modeBtns[i].addEventListener("click", function () {
      modeBtns[0].classList.remove("selected-mode");
      modeBtns[1].classList.remove("selected-mode");
      this.classList.add("selected-mode");
      //figure out how many sqrs to show
      if (this.textContent === "EASY") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      //generate new COLORS
      //pick a new pickedColor
      //update page
      reset();
    })
  }
}

function setUpSquares() {
  for(var i = 0; i < squares.length; i++){
  // add initial colors
    squares[i].style.backgroundColor = colors[i];
  //add click listeners
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
  //checks if the color user picked is right
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor
      resetBtn.textContent = "Play Again?"
    }else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again!";
    }
    })
  }
}

function reset() {
  colors = generateColors(numSquares);
  pickedColor = colors[pickColor()];
  h1.style.backgroundColor = "steelblue"
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }

  };
  resetBtn.textContent = "NEW COLORS";
  messageDisplay.textContent = "";
}

//giving logic to reset btn
resetBtn.addEventListener("click", function(){
   reset();
})

function changeColors(color) {
  // loop through all squares
  for (var i =0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return random;
}
function generateColors(num) {
// make an array
  var arr = [];
  for (var i = 0; i < num; i++){
    arr.push(randomColor())
    // get random color
    // random
  }
  return arr;
}

function randomColor(){
  // pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 255 + 1);
  // pick a "green" from 0 to 255
  var g = Math.floor(Math.random() * 255 + 1);
  // pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 255 + 1);
  return "rgb("+r+", "+g+", "+b+")";
}
