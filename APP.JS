const PlayerText=document.querySelector("#playerText")
const computerText=document.querySelector("#computerText")
const resultText=document.querySelector("#resultText")
const choiceButton=document.querySelectorAll(".choiceBtn")
let player;
let computer;
let result; 
let wins = 0; 
choiceButton.forEach(button => button.addEventListener("click", () => {
player=button.textContent;
computerTurn()
PlayerText.textContent=`player:${player}`;
computerText.textContent=`computer:${computer}`
resultText.textContent=checkWinner()
updateWins();
}))
function computerTurn(){
    const randNum=Math.floor(Math.random()*3)+1
    switch(randNum){
        case 1:
        computer="rock"
        break;
        case 2:
            computer="paper"
          break;
     case 3:
        computer="scissors"
        break;
    }
}
function checkWinner(){
    if(player== computer){
        return "Draw!"
    } else if(computer=="rock"){
        return (player== "paper") ? "You win!" :"You lose!"
    }
     else if(computer=="paper"){
        return (player== "scissors") ? "You win!" :"You lose!"
    }
    else if(computer=="scissors"){
        return (player== "rock") ? "You win!" :"You lose!"
    }

}
function updateWins() {
    wins++; // Increment the win counter
    const winCountElement = document.getElementById("winCount");
    winCountElement.textContent = `Total wins: ${wins}`;
  }