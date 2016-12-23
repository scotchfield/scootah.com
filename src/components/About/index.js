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
          <p>
            <span className='tech-label'>javascript</span>
            <span className='tech-label'>python</span>
            <span className='tech-label'>react</span>
            <span className='tech-label'>django</span>
            <span className='tech-label'>php</span>
          </p>

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

          <p>Supported and extended a suite of JavaScript/Python services, while assisting with the development of a new platform and building front-end stores. Implemented a shipping platform and methodology for worldwide customers. Built an analytics suite to track usage.</p>

          <h3>Chief Technology Officer, Scent Trunk <small>2015 - 2016</small></h3>

          <p>
            <span className='tech-label'>javascript</span>
            <span className='tech-label'>python</span>
            <span className='tech-label'>php</span>
            <span className='tech-label'>wordpress</span>
          </p>

          <p>Overhauled a legacy WordPress install to support a 10x growth in customers. Built a shipping methodology and a recommendation engine to largely automate customer deliveries. Established a remote-friendly culture, and onboarded the initial software team.</p>

          <h3>Post-Doctoral Fellow, Queen’s University <small>2012 - 2015</small></h3>

          <p>
            <span className='tech-label'>python</span>
            <span className='tech-label'>numpy</span>
            <span className='tech-label'>javascript</span>
          </p>

          <p>Graduate supervision and mentoring, paired with independent research and software development around data mining and machine learning.</p>

          <h3>Web Applications Engineer, Google <small>2006 - 2007</small></h3>

          <p>
            <span className='tech-label'>c++</span>
            <span className='tech-label'>java</span>
            <span className='tech-label'>javascript</span>
            <span className='tech-label'>python</span>
          </p>

          <p>Developed internal tools to improve efficiency and aid development on products including Google Checkout and Web Search Removals. Heavy development in C++, Java, and Python.</p>

          <h3>Software Engineer, Electronic Arts <small>2004 - 2006</small></h3>

          <p>
            <span className='tech-label'>c++</span>
            <span className='tech-label'>python</span>
          </p>

          <p>Served as the lead online engineer, and handled aspects of video and sound playback, user interface development, and rendering pipeline management. Received the Rookie of the Year award in 2005, awarded to recognize fast starting new talent.</p>

          <h2>Education</h2>

          <h3>Doctor of Philosophy, Queen’s University <small>2007 - 2012</small></h3>

          <p>
            <span className='tech-label'>python</span>
            <span className='tech-label'>numpy</span>
            <span className='tech-label'>javascript</span>
          </p>

          <p>Built a process for evaluating similarity metrics when using machine learning, and tested performance on software engineering metrics. Built visualizations to make machine learning approaches more accessible to general audiences.</p>
        </div>
      </div>
    );
  }
}

export default About;
