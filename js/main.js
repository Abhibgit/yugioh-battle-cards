var yugiohApp = {};

yugiohApp.startButton = document.getElementById("start");
yugiohApp.attackButton = document.getElementById("attack");

//Creating array of cards
const cards = ["Blueeyes", "Dark Magician", "RedeyesBlackdragon", "Exxod"];
const attack = [100, 50, 60, 0];
const defence = [10, 60, 40, 100];

// empty array to contain cards
let deck = [];
let playWin = false;
let compWin = false;

// create a deck of cards
// for (let n = 0; n < cards.length; n++) {
//   for (let a = 0; a < attack.length; a++)
//     for (let d = 0; d < defence.length; d++) {
//       let card = { Name: cards[n], Attack: attack[a], Defence: defence[d] };
//       deck.push(card);
//     }
// }

// shuffle the cards
// for (let n = deck.length - 1; n > 0; n--) {
//   let j = Math.floor(Math.random() * n);
//   let temp = deck[n];
//   deck[n] = deck[j];
//   deck[j] = temp;
// }

// console.log("The Yugioh Cards are:");
// // display cards
// for (let n = 0; n < 5; n++) {
//   console.log(
//     `${deck[n].Name} with Attack ${deck[n].Attack} and defence ${deck[n].Defence}`
//   );
// }

//create player hand

// let playerHand = player hand element

const playerHand = deck.slice(1, 3);

//create comp hand

//let compHand = comp hand element

const compHand = deck.slice(0, 2);

//LISTENERS

//create start button.
//create attack button

// yugiohApp.attackButton.addEventlistener("click", attack);

//Creating Player health counter
var playerhealthcounter;

//create Comp health counter
var comphealthcounter;

// create wins and losses
score = {};

//infotext

infoText = "Press start to play ";

//initialize game
var init = function () {
  yugiohApp.begin.classList.add("hidden");
  yugiohApp.textUpdates.innerHTML = " Choose Move";
  // render();
};

var render = function () {
  //set info text to textEL

  textEL.textContent = infoText;

  //set score to zero or blank
  scoreEl.textContent = score.win / score.loss;
};
var attack = function () {
  infoText = "Attacking...";
  if (playerHand[0][1] > compHand[0][1]) {
    playWin = true;
    console.log("player wins");
  } else {
    compWin = true;
    console.log("comp wins");
  }
  end;
};

yugiohApp.startButton.addEventListener("click", init);
