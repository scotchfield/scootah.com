const skills = {
  skillList: [
    'Strength', 'Dexterity', 'Intelligence', 'Wisdom',
    'Constitution', 'Charisma', 'Appearance', 'Power',
    'Size', 'Sanity', 'Education', 'Idea', 'Luck', 'Knowledge',
    'Versatility', 'Gumption', 'Savvy', 'Tastiness', 'Verisimilitude',
    'Green Ranger', 'Art', 'Coffee', 'Aesthetics', 'Body', 'Might',
    'Brawn', 'Endurance', 'Vitality', 'Agility', 'Reflexes',
    'Speed', 'Intellect', 'Brains', 'Z-Factor', 'Knowledge',
    'Charm', 'Anti-Charm', 'Stench', 'Social', 'Psychic', 'Wits',
    'Ego', 'Id', 'Super-Ego', 'Cautiousness', 'Fate', 'Luck',
    'Chance', 'Gambling', 'Handwriting', 'Ambidexterity',
    'Volume', 'Social Media', 'Animal Magnetism', 'Fresh Breath',
    'Flexibility', 'Woe', 'Antifragility', 'Thickness', 'Static',
    'Page Count', 'Brightness', 'Shadow', 'Resolution', 'Hair',
    'Viscosity', 'Upbringing', 'Definition', 'Cubism', 'Comfort',
  ],
  getRandom: function() {
    let i = Math.floor(Math.random() * this.skillList.length);
    return this.skillList[i];
  }
};

const Character = {
  init: () => {
    let character = {
      level: 1,
      xp: 0,
      skills: {
        'Strength': 1,
        'Luck': 1,
      }
    };

    for (let i = 0; i < 3; i += 1) {
      let skill = skills.getRandom();
      character.skills[skill] = character.skills[skill] ? character.skills[skill] + 1 : 1;
    }

    return character;
  },
  skills: skills
};

export default Character;
