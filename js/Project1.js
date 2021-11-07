//make variables
var yugiohApp = {};

//make  arrays upto 3
const attack = [100, 50, 60, 0];
const defence = [10, 60, 40, 100];
let cardImage = [
  "../images/Blueeyes.jpg",
  "../images/Dark_Magician.jpg",
  "../images/BusterBlader.jpg",
  "../images/EXODIA.jpg",
];

//make an empty array
let monsters = [];

let pHealth = 1000;
let cHealth = 1000;
//let pAttack = pa;
//let cAttack = ca;

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
yugiohApp.openingImage = document.getElementById("openingImage");
yugiohApp.compAttack = document.getElementById("compAttack");
yugiohApp.playerAttack = document.getElementById("playerAttack");
//make 2 empty boxes to start with to reflext the attack and defense

// functions

function begin() {
  yugiohApp.playerHealth.innerHTML = "Player Health:" + pHealth;
  yugiohApp.compHealth.innerHTML = "Kaiba Health:" + cHealth;
  yugiohApp.playerCard.src = "../images/yugioh.jpg";
  yugiohApp.oppCard.src = "../images/opponent.jpg";

  //image shuffle algo

  for (let n = cardImage.length - 1; n > 0; n--) {
    let j = Math.floor(Math.random() * n);
    let temp = cardImage[n];
    cardImage[n] = cardImage[j];
    cardImage[j] = temp;
  }
  console.log({ cardImage });

  //Players Hand Algo

  const playerHandcard = cardImage.slice(0, 2);

  const compHandcard = cardImage.slice(1, 3);

  yugiohApp.playerCard.src = playerHandcard[0];

  yugiohApp.oppCard.src = compHandcard[0];

  // Players attack algo

  for (let n = attack.length - 1; n > 0; n--) {
    let j = Math.floor(Math.random() * n);
    let temp = attack[n];
    attack[n] = attack[j];
    attack[j] = temp;
  }

  const playerAttack = attack.slice(0, 2);

  const compAttack = attack.slice(1, 3);

  let damage = playerAttack[0];
  let oAttack = compAttack[0];

  yugiohApp.playerAttack.innerHTML = "Player Attack:" + damage;
  yugiohApp.compAttack.innerHTML = "Opponent Attack:" + oAttack;
}

function hit() {
  if (monsters.indexOf(2)) {
  }
}

function block() {}

// random function shuffle

//event listener for buttons
yugiohApp.startButton.addEventListener("click", begin);
yugiohApp.pAttackButton.addEventListener("click", hit);
//yugiohApp.pDefendButton.addEventListener("click", block);

// shuffle the cards
// for (let n = deck.length - 1; n > 0; n--) {
//   let j = Math.floor(Math.random() * n);
//   let temp = deck[n];
//   deck[n] = deck[j];
//   deck[j] = temp;
