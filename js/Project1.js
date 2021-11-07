//make variables
var yugiohApp = {};

//make  arrays upto 3
const attack = [180, 500, 160, 0, 200, 150, 225, 450, 25, 185];
const defence = [100, 60, 40, 100, 300, 500];
let cardImage = [
  "../images/Blueeyes.jpg",
  "../images/Dark_Magician.jpg",
  "../images/BusterBlader.jpg",
  "../images/EXODIA.jpg",
  "../images/SummonedSkull.jpg",
  "../images/TylertheGreatWarrior.jpg",
  "../images/TheForbiddengod.jpg",
  "../images/DivineMagician.jpg",
  "../images/Amun.jpg",
  "../images/Thunderdragonking.jpg",
];

//make an empty array
let damage = 0;
let oAttack = 0;
let pHealth = 1000;
let cHealth = 1000;
let playerHandcard = [];
let compHandcard = [];
let playerAttack = [];
let compAttack = [];
let winner = "";

//declare buttons

yugiohApp.startButton = document.getElementById("start");
yugiohApp.resetButton = document.getElementById("reset");
yugiohApp.pAttackButton = document.getElementById("pAttack");
// yugiohApp.pDefendButton = document.getElementById("pDefend");
// yugiohApp.cDefendButton = document.getElementById("cDefend");
yugiohApp.cAttackButton = document.getElementById("cAttack");
yugiohApp.playerHealth = document.getElementById("playerHealth");
yugiohApp.compHealth = document.getElementById("compHealth");
yugiohApp.playerCard = document.getElementById("playerCard");
yugiohApp.oppCard = document.getElementById("oppCard");
yugiohApp.openingImage = document.getElementById("openingImage");
yugiohApp.compAttack = document.getElementById("compAttack");
yugiohApp.playerAttack = document.getElementById("playerAttack");
yugiohApp.annoucement = document.getElementById("gameAnnouncement");
//make 2 empty boxes to start with to reflext the attack and defense

// functions

function begin() {
  pHealth = 1000;
  cHealth = 1000;

  yugiohApp.playerHealth.innerHTML = "Player Health:" + pHealth;
  yugiohApp.compHealth.innerHTML = "Kaiba Health:" + cHealth;

  //image shuffle algo

  for (let n = cardImage.length - 1; n > 0; n--) {
    let j = Math.floor(Math.random() * n);
    let temp = cardImage[n];
    cardImage[n] = cardImage[j];
    cardImage[j] = temp;
  }

  //Players Hand Algo

  playerHandcard = cardImage.slice(0, 5);
  compHandcard = cardImage.slice(5, 10);

  yugiohApp.playerCard.src = playerHandcard[0];
  yugiohApp.oppCard.src = compHandcard[0];

  // Players attack algo
  for (let n = attack.length - 1; n > 0; n--) {
    let j = Math.floor(Math.random() * n);
    let temp = attack[n];
    attack[n] = attack[j];
    attack[j] = temp;
  }

  playerAttack = attack.slice(0, 5);
  compAttack = attack.slice(5, 10);

  damage = playerAttack[0];
  oAttack = compAttack[0];

  yugiohApp.playerAttack.innerHTML = "Player Attack:" + damage;
  yugiohApp.compAttack.innerHTML = "Opponent Attack:" + oAttack;
}

function hit() {
  if (playerHandcard.length === 0 || cHealth <= 0 || pHealth <= 0) {
    if (cHealth > pHealth) {
      yugiohApp.annoucement.innerHTML = "You Lost :( ";
    } else {
      yugiohApp.annoucement.innerHTML = "We have a winner! Yugi Wins!!!";
    }
  } else {
    if (damage > oAttack) {
      cHealth = cHealth - (damage - oAttack);
      yugiohApp.compHealth.innerHTML = "Kaiba Health:" + cHealth;
    } else {
      pHealth = pHealth - (oAttack - damage);
      yugiohApp.playerHealth.innerHTML = "Player Health:" + pHealth;
    }
    playerHandcard.shift();
    compHandcard.shift();
    playerAttack.shift();
    compAttack.shift();

    if (playerHandcard.length != 0) {
      yugiohApp.playerCard.src = playerHandcard[0];
      yugiohApp.oppCard.src = compHandcard[0];

      damage = playerAttack[0];
      oAttack = compAttack[0];
      yugiohApp.playerAttack.innerHTML = "Player Attack:" + damage;
      yugiohApp.compAttack.innerHTML = "Opponent Attack:" + oAttack;
    } else {
      if (pHealth > cHealth) {
        winner = "Yugi";
      } else {
        winner = "Kaiba";
      }
      yugiohApp.annoucement.innerHTML =
        "That was the last round! We have a winner! " + winner + " Wins!";
    }
  }
}

function reset() {
  yugiohApp.playerCard.src = "../images/Background2.jpg";
  yugiohApp.oppCard.src = "../images/Background1.jpg";
  damage = 0;
  oAttack = 0;
  pHealth = 1000;
  cHealth = 1000;
  playerHandcard = [];
  compHandcard = [];
  playerAttack = [];
  compAttack = [];
  winner = "";
  yugiohApp.playerHealth.innerHTML = "Player Health:";
  yugiohApp.compHealth.innerHTML = "Kaiba Health:";
  yugiohApp.playerAttack.innerHTML = "Player Attack:";
  yugiohApp.compAttack.innerHTML = "Opponent Attack:";
  yugiohApp.annoucement.innerHTML = "";
}

//event listener for buttons
yugiohApp.startButton.addEventListener("click", begin);
yugiohApp.pAttackButton.addEventListener("click", hit);
yugiohApp.resetButton.addEventListener("click", reset);
//yugiohApp.pDefendButton.addEventListener("click", block);
