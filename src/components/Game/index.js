import React, { Component } from 'react';

import Store from '../../store';

import CharacterPanel from '../CharacterPanel';
import CombatPanel from '../CombatPanel';

import './style.css';

class Game extends Component {
  render() {
    let character = Store.getCharacter();
    let combat = Store.getCombat();

    return (
      <div className='game navbar navbar-fixed-bottom'>
        <CharacterPanel character={ character } />
        <CombatPanel combat={ combat } />
      </div>
    );
  }
}

export default Game;
