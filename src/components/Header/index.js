import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import './style.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='details'>
          <h1>Scott Grant</h1>
          <ul>
            <li><a href='https://twitter.com/scotchfield'><FontAwesome name='twitter' />&nbsp;scotchfield</a></li>
            <li><a href='https://github.com/scotchfield'><FontAwesome name='github' />&nbsp;scotchfield</a></li>
            <li><a href='mailto:swrittenb@gmail.com'><FontAwesome name='envelope' />&nbsp;swrittenb@gmail.com</a></li>
          </ul>
        </div>
        <div className='navigation'>
          <ul>
            <li className={ this.props.navigation === 'home' ? 'active' : '' }><Link to='/'>home</Link></li>
            <li className={ this.props.navigation === 'about' ? 'active' : '' }><Link to='/about/'>about</Link></li>
            <li className={ this.props.navigation === 'projects' ? 'active' : '' }><Link to='/projects/'>projects</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
