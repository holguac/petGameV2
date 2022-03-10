
//import inquirer
const inquirer = require('inquirer');

class Plant {
	_health;
	_hunger;
	_thirst;
	_boredom;
	_isAlive = true;
	_status;

	constructor(name) {
		this._name = name;
		this._health = 100;
		this._hunger = 0;
		this._thirst = 0;
		this._boredom = 0;
		this._status = 'Your plant is alive and well.';
	}

	get name() {
		return this._name;
	}
	get health() {
		return this._health;
	}
	get hunger() {
		return this._hunger;
	}
	get thirst() {
		return this._thirst;
	}
	get boredom() {
		return this._boredom;
	}
	get stats() {
		return console.table({
			name: this._name,
			health: this._health,
			hunger: this._hunger,
			thirst: this._thirst,
			boredom: this._boredom,
		});
	}
	get status() {
		return this._status;
	}

	set status(msg) {
		this._status = msg;
	}

	checkStats() {
		if (this._health <= 0) {
			this._isAlive = false;
			this.status = `${this.name} has died from malnutrition, please make sure your next plant has plenty to eat and drink.`;
		}
		if (this._boredom >= 50) {
			this._isAlive = false;
			this.status = `${this.name} has started wilt becasue it is bored.`;
		}
	}

	drinks() {
		this.thirst(-5);
		if (this.thirst < 0) this._thirst = 0;
		console.log(`Aaaaah, ${this.name} is feeling refreshed.`);
		return this.thirst;
	}

	async eats() {
		const { food } = await inquirer.prompt(questions.eat);

		if (food === 'snack') this.hunger(-2);
		if (food === 'meal') this.hunger(-5);
		if (food === 'treat') this.hunger(-10);

		return this._hunger;
	}

	hunger(num) {
		this._hunger += num;

		if (this._hunger < 0) this._hunger = 0;
		if (this._hunger > 25) this.health(-5);
		if (this._hunger > 40) {
			this.health(-5);
			this.boredom(5);
		}
		return this.checkStats();
	}

	thirst(num) {
		this._thirst += num;

		if (this._thirst < 0) this._thirst = 0;
		if (this._thirst > 25) this.health(-5);
		if (this._thirst > 40) {
			this.health(-5);
			this.boredom(5);
		}
		return this.checkStats();
	}

	health(num) {
		this._health += num;
		if (this._health < 0) this._health = 0;
	}

	boredom(num) {
		this._boredom += num;
		if (this._boredom < 0) this._boredom = 0;

		return this.checkStats();
	}
}

class Yucca extends Plant {
	constructor(name) {
		super(name);
	}

	async play() {
		const { play } = await inquirer.prompt(questions.YuccaPlay);

		if (play === 'PlayAcidJazz') this.boredom(-2);
		if (play === 'PlayCountryAndWestern') this.boredom(-5);
		if (play === 'PlayColdPlay') this.boredom(-10);
	}
}

class PalmTree extends Plant {
	constructor(name) {
		super(name);
	}

	async play() {
		const { play } = await inquirer.prompt(questions.palmTreePlay);

		if (play === 'PlaySeanPaul') this.boredom(-2);
		if (play === 'PlayClubtropicana') this.boredom(-5);
		if (play === 'PlayPinaColada') this.boredom(-10);
	}
}

const questions = {
	eat: {
		type: 'list',
		name: 'food',
		message: `What do you want to feed ${this.name}?`,
		choices: [
			{
				key: 'a',
				name: 'Snack: hunger -2',
				value: 'snack',
			},
			{
				key: 'b',
				name: 'Meal: hunger -5',
				value: 'meal',
			},
			{
				key: 'c',
				name: 'Treat: hunger -10',
				value: 'treat',
			},
		],
	},

	YuccaPlay: {
		type: 'list',
		name: 'play',
		message: 'Do you want to listen to ?',
		choices: [
			{
				key: 'a',
				name: ' AcidJam: boredom -2',
				value: 'PlayAcidJam',
			},
			{
				key: 'b',
				name: 'Country And Western: boredom -5',
				value: 'PlayCountryAndWestern',
			},
			{
				key: 'c',
				name: 'ColdPlay: boredom -10',
				value: 'PlayColdPlay',
			},
		],
	},

	palmTreePlay: {
		type: 'list',
		name: 'play',
		message: 'Do you want to listen to ?',
		choices: [
			{
				key: 'a',
				name: 'Sean Paul: boredom -2',
				value: 'PlaySeanPaul',
			},
			{
				key: 'b',
				name: 'Club Tropicana: boredom -5',
				value: 'PlayClubtropicana',
			},
			{
				key: 'c',
				name: 'Pina Colada: boredom -10',
				value: 'PlayPinaColada',
			},
		],
	},

	typeOfPlant: {
		type: 'list',
		name: 'typeOfPlant',
		message:
			'What type of plant would you like? Please choose from the following options:',
		choices: [
			{
				key: 'a',
				name: 'Yucca',
				value: 'yucca',
			},
			{
				key: 'b',
				name: 'palmTree',
				value: 'palmtree',
			},
		],
	},

	choice: {
		type: 'list',
		name: 'choice',
		message: 'What would you like to do?',
		choices: [
			{
				key: 'a',
				name: 'Play it some music',
				value: 'play',
			},
			{
				key: 'b',
				name: 'Feed your plant',
				value: 'feed',
			},
			{
				key: 'c',
				name: 'Water your plant',
				value: 'drink',
			},
			{
				key: 'd',
				name: "View your plants status",
				value: 'status',
			},
			{
				key: 'e',
				name: 'Quit the game',
				value: 'quit',
			},
		],
	},

	quitChoice: {
		type: 'list',
		name: 'quitChoice',
		message:
			'Are you sure you want to quit? This will mean your plant will die :(',
		choices: [
			{
				key: 'a',
				name: "Yes, I'm sure.",
				value: 'yes',
			},
			{
				key: 'b',
				name: "No, I love my plant",
				value: 'no',
			},
		],
	},

	playAgain: {
		type: 'list',
		name: 'playAgain',
		message: 'Would you like to play again?',
		choices: [
			{
				key: 'a',
				name: 'Yes',
				value: 'yes',
			},
			{
				key: 'b',
				name: 'No',
				value: 'no',
			},
		],
	},
};

let myPlant;

async function start() {
	const { typeOfPlant } = await inquirer.prompt(questions.typeOfPlant);

	const { plantName } = await inquirer.prompt({
		type: 'input',
		name: 'plantName',
		message: 'What is your plant called?',
	});

	if (typeOfPlant === 'yucca') myPlant = new Yucca(plantName);
	else if (typeOfPlant === 'palmtree') myPlant = new PalmTree(plantName);

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