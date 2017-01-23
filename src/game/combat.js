const combat = {
  init: () => {
    return {
      state: 'idle'
    };
  },
  getFoe: () => {
    let adjectives = [
      'Acute', 'Admired', 'Afraid', 'Amused', 'Angry',
      'Besieged', 'Blushing', 'Bohemian', 'Bored', 'Candied',
      'Cheeky', 'Civilised', 'Colloquial', 'Conceding', 'Confident',
      'Crypto', 'Dashing', 'Economical', 'Evergreen', 'Excited',
      'Famous', 'Flammable', 'Floral', 'Grammatical', 'Healthiest',
      'Humid', 'Improbable', 'Intern', 'Joyful', 'Knowing',
      'Loudest', 'Melodic', 'Molecular', 'Networked', 'Overheated',
      'Pensive', 'Piquant', 'Quick', 'Reliable', 'Reversing',
      'Salient', 'Self-Taught', 'Tangible', 'Trusting', 'Unassuming',
      'Unsuccessful', 'Vanilla', 'Weakest'
    ];

    let occupations = [
      'Adventurer', 'Adviser', 'Archer', 'Assassin', 'Barkeeper',
      'Bookbinder', 'Cheesemaker', 'Dentist', 'Florist',
      'Healer', 'Jester', 'Locksmith', 'Merchant', 'Musician',
      'Painter', 'Prophet', 'Smuggler', 'Soldier', 'Spy',
      'Tanner', 'Tutor', 'Undertaker', 'Villain'
    ];

    let adjIndex = Math.floor(Math.random() * adjectives.length);
    let occIndex = Math.floor(Math.random() * occupations.length);

    return {
      name: adjectives[adjIndex] + ' ' + occupations[occIndex]
    };
  }
};

export default combat;
