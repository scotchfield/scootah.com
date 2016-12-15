import React, { Component } from 'react';

import Header from '../Header';

import './style.css';

class About extends Component {
  render() {
    return (
      <div className='home'>
        <Header navigation={ 'about' } />
      </div>
    );
  }
}

export default About;
