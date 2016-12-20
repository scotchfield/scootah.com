import React, { Component } from 'react';

import Header from '../Header';

import './style.css';

class About extends Component {
  render() {
    return (
      <div className='home'>
        <Header navigation={ 'about' } />

        <div className='home-container'>
          <h3>Full-Stack Software Developer</h3>
          <h4>Kingston, Ontario, Canada</h4>
          <p>JavaScript, Python, React, Django, PHP</p>

          <h2>Experience</h2>

          <h3>Full-Stack Software Developer, Six to Start <small>2016 - current</small></h3>

          <p>
            <span className='tech-label'>javascript</span>
            <span className='tech-label'>react</span>
            <span className='tech-label'>angular</span>
            <span className='tech-label'>python</span>
            <span className='tech-label'>django</span>
            <span className='tech-label'>php</span>
          </p>

          <p>Supported and extended a suite of JavaScript/Python services, while assisting with the development of a new platform. Implemented a shipping platform and methodology for worldwide customers.</p>

          <h3>Chief Technology Officer, Scent Trunk <small>2015 - 2016</small></h3>

          <p>
            <span className='tech-label'>javascript</span>
            <span className='tech-label'>python</span>
            <span className='tech-label'>php</span>
            <span className='tech-label'>wordpress</span>
          </p>

          <p>details</p>

          <h3>Post-Doctoral Fellow, Queen’s University <small>2012 - 2015</small></h3>

          <p>tech</p>

          <p>details</p>

          <h3>Web Applications Engineer, Google <small>2006 - 2007</small></h3>

          <p>tech</p>

          <p>details</p>

          <h3>Software Engineer, Electronic Arts <small>2004 - 2006</small></h3>

          <p>tech</p>

          <p>details</p>

          <h2>Education</h2>

          <h3>Doctor of Philosophy, Queen’s University <small>2007 - 2012</small></h3>

          <p>tech</p>

          <p>details</p>

          <h3>Master of Science, Queen’s University <small>2002 - 2004</small></h3>

          <p>tech</p>

          <p>details</p>
        </div>
      </div>
    );
  }
}

export default About;
