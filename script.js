"use strict";

//Game Board
let gameBoard = document.getElementById("game-board");
//Game Squares
let a1 = document.getElementById("square-0");
let a2 = document.getElementById("square-1");
let a3 = document.getElementById("square-2");
let b1 = document.getElementById("square-3");
let b2 = document.getElementById("square-4");
let b3 = document.getElementById("square-5");
let c1 = document.getElementById("square-6");
let c2 = document.getElementById("square-7");
let c3 = document.getElementById("square-8");
let squareArray = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

//Current Turn
let currentTurn = "X";
let currentTurnDisplay = document.getElementById("turn");
let currentTurnText = currentTurn.value;

function nextTurn() {
  if (currentTurn == "X") {
    currentTurn = "O";
  } else {
    currentTurn = "X";
  }
}

function squareClickListener(event) {
  this.innerText = currentTurn;
  nextTurn();
  this.removeEventListener("click", squareClickListener);
}
function addEventListenerToSquares() {
  for (let i = 0; i <= squareArray.length - 1; i++) {
    squareArray[i].addEventListener("click", squareClickListener);
  }
}
function isGameWon(){
    //X win conditions
    if(squareArray[0].innerText == "X" && squareArray[1].innerText == "X" && squareArray[2].innerText == "X"){
        //Code
    }
    if(squareArray[3].innerText == "X" && squareArray[4].innerText == "X" && squareArray[5].innerText == "X"){
        //Code
    }
    if(squareArray[6].innerText == "X" && squareArray[7].innerText == "X" && squareArray[8].innerText == "X"){
        //Code
    }
    if(squareArray[0].innerText == "X" && squareArray[3].innerText == "X" && squareArray[6].innerText == "X"){
        //Code
    }
    if(squareArray[1].innerText == "X" && squareArray[4].innerText == "X" && squareArray[7].innerText == "X"){
        //Code
    }
    if(squareArray[2].innerText == "X" && squareArray[5].innerText == "X" && squareArray[8].innerText == "X"){
        //Code
    }
    if(squareArray[0].innerText == "X" && squareArray[4].innerText == "X" && squareArray[8].innerText == "X"){
        //Code
    }
    if(squareArray[2].innerText == "X" && squareArray[4].innerText == "X" && squareArray[6].innerText == "X"){
        //Code
    }
    //O win conditions
    if(squareArray[0].innerText == "X" && squareArray[1].innerText == "X" && squareArray[2].innerText == "X"){
        //Code
    }
    if(squareArray[3].innerText == "X" && squareArray[4].innerText == "X" && squareArray[5].innerText == "X"){
        //Code
    }
    if(squareArray[6].innerText == "X" && squareArray[7].innerText == "X" && squareArray[8].innerText == "X"){
        //Code
    }
    if(squareArray[0].innerText == "X" && squareArray[3].innerText == "X" && squareArray[6].innerText == "X"){
        //Code
    }
    if(squareArray[1].innerText == "X" && squareArray[4].innerText == "X" && squareArray[7].innerText == "X"){
        //Code
    }
    if(squareArray[2].innerText == "X" && squareArray[5].innerText == "X" && squareArray[8].innerText == "X"){
        //Code
    }
    if(squareArray[0].innerText == "X" && squareArray[4].innerText == "X" && squareArray[8].innerText == "X"){
        //Code
    }
    if(squareArray[2].innerText == "X" && squareArray[4].innerText == "X" && squareArray[6].innerText == "X"){
        //Code
    }
}

addEventListenerToSquares();
