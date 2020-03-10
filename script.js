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
//Current Turn
let currentTurn = document.getElementById("turn");
let currentTurnText = currentTurn.value;
let xTurn = "X";
let oTurn = "O";


function gamePlay(){
    
}

gameBoard.addEventListener("click", gamePlay)
