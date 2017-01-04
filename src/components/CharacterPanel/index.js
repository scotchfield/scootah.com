import React, { Component } from 'react';

import './style.css';

class CharacterPanel extends Component {
  render() {
    let character = this.props.character;

    let skills = Object.keys(character.skills).map((skill, i) => {
      return <span key={ i } className='skill'>{ skill }:&nbsp;{ character.skills[skill] }</span>
    }).reduce((a, b) => {
      return a === null ? [b] : [...a, ', ', b]
    }, null);

    return (
      <div className='character-panel col-md-4 col-sm-6 col-xs-12'>
        <b>Detective Surly</b><br />
        <b>Level</b>: { character.level }<br />
        <b>Experience Points</b>: { character.xp }<br />
        <b>Skills</b>: { skills }
      </div>
    );
  }
}

export default CharacterPanel;
