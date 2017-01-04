import React, { Component } from 'react';

import './style.css';

class CombatPanel extends Component {
  initFight() {
    console.log('ok');
  }

  render() {
    let content = (
      <a onClick={() => { this.initFight(); }}>
        Looking for a fight?
      </a>
    );

    if (this.props.combat === 'fighting') {

    }

    return (
      <div className='world-panel col-md-8 col-sm-6 col-xs-12'>
        { content }
      </div>
    );
  }
}

export default CombatPanel;
