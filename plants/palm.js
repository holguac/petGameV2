
const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Plant } = require('../plant');

class Palm extends Plant {
  constructor(name) {
    super(name);
  }

  async play() {
    const { play } = await inquirer.prompt(questions.palmPlay);

    if (play === 'PlayAcidJazz') this.boredom(-2);
    if (play === 'PlayCountryAndWestern') this.boredom(-5);
    if (play === 'PlayColdPlay') this.boredom(-10);
  }
}

module.exports = {
  Palm,
};