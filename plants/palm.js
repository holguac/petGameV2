
const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Plant } = require('../plant');

class Palm extends Plant {
  constructor(name) {
    super(name);
  }

  async play() {
    const { play } = await inquirer.prompt(questions.palmPlay);

    if (play === 'PlaySeanPaul') this.boredom(-2);
    if (play === 'PlayClubtropicana') this.boredom(-5);
    if (play === 'PlayPinaColada') this.boredom(-10);
  }
}

module.exports = {
  Plam,
};