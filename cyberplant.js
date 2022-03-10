
const inquirer = require('inquirer');

const { questions } = require('./questions');

const { PalmTree } = require('./plants/palmTree');
const { Yucca } = require('./plants/yucca');

let myPlant;

async function start() {
  const { typeOfplant } = await inquirer.prompt(questions.typeOfplant);

  const { plantName } = await inquirer.prompt({
    type: 'input',
    name: 'plantName',
    message: 'What is your plant called?',
  });

  if (typeOfplant === 'yucca') myPlant = new Yucca(plantName);
  else if (typeOfplant === 'palmtree') myPlant = new PalmTree(plantName);

  userChoice();
}

async function userChoice() {
  myPlant.boredom(5);
  myPlant.hunger(5);
  myPlant.thirst(5);
  myPlant.stats;

  if (!myPlant._isAlive) {
    gameOver();
    return;
  }

  const { choice } = await inquirer.prompt(questions.choice);

  if (choice === 'status') console.log(myPlant.status);
  if (choice === 'play') await myPlant.play();
  if (choice === 'feed') await myPlant.eats();
  if (choice === 'drink') await myPlant.drinks();
  if (choice === 'quit') {
    const quitChoice = await confirmQuit();
    if (quitChoice) return;
  }

  myPlant.checkStats();

  userChoice();
}

async function confirmQuit() {
  const { quitChoice } = await inquirer.prompt(questions.quitChoice);

  if (quitChoice === 'yes') return true;
  else return false;
}

async function gameOver() {
  console.log(myPlant.status);
  const { playAgain } = await inquirer.prompt(questions.playAgain);

  if (playAgain === 'yes') start();
  else return;
}

start();