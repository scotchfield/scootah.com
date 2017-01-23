import React, { Component } from 'react';

import Store from '../../store';

import CharacterPanel from '../CharacterPanel';
import CombatPanel from '../CombatPanel';

import './style.css';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: Store.getCharacter(),
      combat: Store.getCombat()
    };

    this.update = this.update.bind(this);
  }

  componentDidMount = () => {
    Store.addChangeListener(this.update);
  }

  componentWillUnmount = () => {
    Store.removeChangeListener(this.update);
  }

  update() {
    this.setState({
      character: Store.getCharacter(),
      combat: Store.getCombat()
    });
  }

  render() {
    return (
      <div className='game navbar navbar-fixed-bottom'>
        <CharacterPanel character={ this.state.character } />
        <CombatPanel combat={ this.state.combat } />
      </div>
    );
  }
}

export default Game;
