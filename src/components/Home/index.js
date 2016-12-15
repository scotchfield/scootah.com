import React, { Component } from 'react';

import Header from '../Header';

import './style.css';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header navigation={ 'home' } />

        <h2>Hi there!</h2>

        <p>If you&#39;d like to play a game while you&#39;re here, check out the footer.</p>

        <p>Have a nice day!</p>
      </div>
    );
  }
}

export default Home;
