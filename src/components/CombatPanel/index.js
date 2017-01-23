import React, { Component } from 'react';

import Actions from '../../actions';

import './style.css';

class CombatPanel extends Component {
  initFight() {
    Actions.getFoe();
  }

  resetFight() {
    Actions.resetFight();
  }

  congratulate() {
    let congratulations = [
      'Nice!',
      'Great job!',
      'Not bad!',
      'Okay!',
      'Sweet!',
      'Radical!',
      'Gnarly!'
    ];

    let index = Math.floor(Math.random() * congratulations.length);
    return congratulations[index];
  }

  render() {
    let content = (
      <a onClick={() => { this.initFight(); }}>
        Looking for a fight?
      </a>
    );

    if (this.props.combat.state === 'combat') {
      let result = this.props.combat.result;
      let foe = this.props.combat.foe;

      content = (
        <div className='combat-detail'>
          <p>Oh no! The <span className='foe-name'>{ foe.name }</span> looks ready for a fight!</p>
          <p className='attacks'>KAPOW! ZOT! BANG!</p>
          <p>
            You gained a point in <span className='skill-name'>{ result.skill }</span>. { this.congratulate() }
          </p>
          <p>
            <a onClick={() => { this.initFight(); }}>
              Looking for another fight?
            </a>
          </p>
          <p>
            <a onClick={() => { this.resetFight(); }}>
              Start from scratch?
            </a>
          </p>
        </div>
      )
    }

    return (
      <div className='world-panel col-md-8 col-sm-6 col-xs-12'>
        { content }
      </div>
    );
  }
}

export default CombatPanel;
