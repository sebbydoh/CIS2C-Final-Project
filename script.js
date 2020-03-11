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
//getItem Variables
//Current Turn
let currentTurn = "X";
let currentTurnDisplay = document.getElementById("turn");

//Score Board
let xScore = document.getElementById("scoreboard-x");
let oScore = document.getElementById("scoreboard-o");

let oCurrentScore;
let xCurrentScore;


//Scoreboard
function xWins() {
    let score = parseInt(xCurrentScore);
    score += 1;
    xScore.innerText = score;
    xCurrentScore = score;
    gameOver();
    alert("X wins!");
}
function oWin() {
    let score = parseInt(oCurrentScore);
    score += 1;
    oScore.innerText = score;
    oCurrentScore = score;
    gameOver();
    alert("O wins!");
}
function nextTurn() {
    if (currentTurn == "X") {
        currentTurn = "O";
        currentTurnDisplay.innerText = "O";
        isGameWon();
    } else {
        currentTurn = "X";
        currentTurnDisplay.innerText = "X";
        isGameWon();
    }
}
function gameOver() {
    for (let i = 0; i <= squareArray.length - 1; i++) {
        squareArray[i].removeEventListener("click", squareClickListener);
    }
    saveScore();
}
//Save state
function getSavedScore() {
  let xSavedScore = localStorage.getItem("xSavedScore");
  let oSavedScore = localStorage.getItem("oSavedScore");
  if(xSavedScore === null){
    xCurrentScore = xScore.innerText;
  } else {
      xCurrentScore = xSavedScore;
      xScore.innerText = xCurrentScore;
  }
  if(oSavedScore === null){
      oCurrentScore = oScore.innerText;
  } else {
      oCurrentScore = oSavedScore;
      oScore.innerText = oCurrentScore;
  }
}
function saveScore() {
    localStorage.setItem("xSavedScore", xCurrentScore);
    localStorage.setItem("oSavedScore", oCurrentScore);
}
//Apply Saved Score
function applySavedScore() {
  xCurrentScore = xSavedScore;
  oCurrentScore = oSavedScore;
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

function isGameWon() {
  //X win conditions
  if (
    squareArray[0].innerText == "X" &&
    squareArray[1].innerText == "X" &&
    squareArray[2].innerText == "X"
  ) {
    xWins();
  }
  if (
    squareArray[3].innerText == "X" &&
    squareArray[4].innerText == "X" &&
    squareArray[5].innerText == "X"
  ) {
    xWins();
  }
  if (
    squareArray[6].innerText == "X" &&
    squareArray[7].innerText == "X" &&
    squareArray[8].innerText == "X"
  ) {
    xWins();
  }
  if (
    squareArray[0].innerText == "X" &&
    squareArray[3].innerText == "X" &&
    squareArray[6].innerText == "X"
  ) {
    xWins();
  }
  if (
    squareArray[1].innerText == "X" &&
    squareArray[4].innerText == "X" &&
    squareArray[7].innerText == "X"
  ) {
    xWins();
  }
  if (
    squareArray[2].innerText == "X" &&
    squareArray[5].innerText == "X" &&
    squareArray[8].innerText == "X"
  ) {
    xWins();
  }
  if (
    squareArray[0].innerText == "X" &&
    squareArray[4].innerText == "X" &&
    squareArray[8].innerText == "X"
  ) {
    xWins();
  }
  if (
    squareArray[2].innerText == "X" &&
    squareArray[4].innerText == "X" &&
    squareArray[6].innerText == "X"
  ) {
    xWins();
  }
  //O win conditions
  if (
    squareArray[0].innerText == "O" &&
    squareArray[1].innerText == "O" &&
    squareArray[2].innerText == "O"
  ) {
    oWin();
  }
  if (
    squareArray[3].innerText == "O" &&
    squareArray[4].innerText == "O" &&
    squareArray[5].innerText == "O"
  ) {
    oWin();
  }
  if (
    squareArray[6].innerText == "O" &&
    squareArray[7].innerText == "O" &&
    squareArray[8].innerText == "O"
  ) {
    oWin();
  }
  if (
    squareArray[0].innerText == "O" &&
    squareArray[3].innerText == "O" &&
    squareArray[6].innerText == "O"
  ) {
    oWin();
  }
  if (
    squareArray[1].innerText == "O" &&
    squareArray[4].innerText == "O" &&
    squareArray[7].innerText == "O"
  ) {
    oWin();
  }
  if (
    squareArray[2].innerText == "O" &&
    squareArray[5].innerText == "O" &&
    squareArray[8].innerText == "O"
  ) {
    oWin();
  }
  if (
    squareArray[0].innerText == "O" &&
    squareArray[4].innerText == "O" &&
    squareArray[8].innerText == "O"
  ) {
    oWin();
  }
  if (
    squareArray[2].innerText == "O" &&
    squareArray[4].innerText == "O" &&
    squareArray[6].innerText == "O"
  ) {
    oWin();
  }
}
getSavedScore();
addEventListenerToSquares();


