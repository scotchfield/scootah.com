import React, { Component } from 'react';

import Store from '../../store';

import CharacterPanel from '../CharacterPanel';
import WorldPanel from '../WorldPanel';

import './style.css';

class Game extends Component {
  render() {
    let character = Store.getCharacter();
    let world = Store.getWorld();

    return (
      <div className='game navbar navbar-fixed-bottom'>
        <CharacterPanel character={ character } />
        <WorldPanel world={ world } />
      </div>
    );
  }
}

export default Game;
