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

//declare buttons

yugiohApp.startButton = document.getElementById("start");
yugiohApp.attackButton = document.getElementById("pAttack");
yugiohApp.defendButton = document.getElementById("pDefend");
yugiohApp.defendButton = document.getElementById("cDefend");
yugiohApp.defendButton = document.getElementById("cAttack");

//event listener for buttons
yugiohApp.startButton.addEventListener("click", begin);
yugiohApp.attackButton.addEventListener("click", hit);
yugiohApp.defendButton.addEventListener("click", block);

//make 2 empty boxes to start with to reflext the attack and defense

// functions

function begin() {}

function hit() {}

function block() {}

// random function shuffle
