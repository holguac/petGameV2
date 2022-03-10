
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
      message: 'Do you want to listen to?',
      choices: [
        {
          key: 'a',
          name: 'AcidJam: boredom -2',
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
          name: 'Club tropicana: boredom -5',
          value: 'PlayClubtropicana',
        },
        {
          key: 'c',
          name: 'Play PinaColada: boredom -10',
          value: 'PlayPinaColada',
        },
      ],
    },
  
    // rabbitPlay: {
    //   type: 'list',
    //   name: 'play',
    //   message: 'Do you want to play with?',
    //   choices: [
    //     {
    //       key: 'a',
    //       name: 'Straw: boredom -2',
    //       value: 'straw',
    //     },
    //     {
    //       key: 'b',
    //       name: 'Paper towels: boredom -5',
    //       value: 'paper',
    //     },
    //   ],
    // },
  
    // parrotPlay: {
    //   type: 'list',
    //   name: 'play',
    //   message: 'Do you want to play with?',
    //   choices: [
    //     {
    //       key: 'a',
    //       name: 'Learn a word: boredom -2',
    //       value: 'word',
    //     },
    //     {
    //       key: 'b',
    //       name: 'Learn a swear word: boredom -5',
    //       value: 'swear',
    //     },
    //     {
    //       key: 'c',
    //       name: 'Swear at the mail man: boredom -10',
    //       value: 'mail',
    //     },
    //   ],
    // },
  
    typeOfPet: {
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
        // {
        //   key: 'c',
        //   name: 'Rabbit',
        //   value: 'rabbit',
        // },
        // {
        //   key: 'd',
        //   name: 'Parrot',
        //   value: 'parrot',
        // },
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
          name: 'Give your plant a drink',
          value: 'drink',
        },
        {
          key: 'd',
          name: "View your plant status",
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
          name: "No, I'll play some more.",
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
  
  module.exports = {
    questions,
  };