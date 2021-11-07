//make variables
var yugiohApp = {};
let damage = 0;
let defense = 0;

//make  arrays upto 3

const cards = ["Blueeyes", "Dark Magician", "RedeyesBlackdragon", "Exxod"];
const attack = [100, 50, 60, 0];
const defence = [10, 60, 40, 100];

//make an empty array

let monsters = [];

let pHealth = 1000;
let cHealth = 1000;

//declare buttons

yugiohApp.startButton = document.getElementById("start");
yugiohApp.pAttackButton = document.getElementById("pAttack");
// yugiohApp.pDefendButton = document.getElementById("pDefend");
// yugiohApp.cDefendButton = document.getElementById("cDefend");
yugiohApp.cAttackButton = document.getElementById("cAttack");
yugiohApp.playerHealth = document.getElementById("playerHealth");
yugiohApp.compHealth = document.getElementById("compHealth");
yugiohApp.playerCard = document.getElementById("playerCard");
yugiohApp.oppCard = document.getElementById("oppCard");
//make 2 empty boxes to start with to reflext the attack and defense

// functions

function begin() {
  yugiohApp.playerHealth.innerHTML = "Player Health:" + pHealth;
  yugiohApp.compHealth.innerHTML = "Kaiba Health:" + cHealth;
  yugiohApp.playerCard.src = "../images/Blueeyes.jpg";
}

function hit() {}

function block() {}

// random function shuffle

//event listener for buttons
yugiohApp.startButton.addEventListener("click", begin);
yugiohApp.pAttackButton.addEventListener("click", hit);
//yugiohApp.pDefendButton.addEventListener("click", block);
