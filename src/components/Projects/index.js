import React, { Component } from 'react';

import Header from '../Header';
import ProjectColumn from '../ProjectColumn';

import './style.css';

class Projects extends Component {
  render() {
    let projects = [
      {
        title: 'ElasticSearch with React',
        description: 'An example project showing how to use Elasticsearch with React',
        labels: ['elasticsearch', 'react', 'javascript'],
        url: 'https://github.com/scotchfield/elasticsearch-react-example'
      },
      {
        title: 'A/B See',
        description: 'WordPress A/B testing in two shortcodes',
        labels: ['php', 'wordpress'],
        url: 'https://github.com/scotchfield/ab-see'
      },
      {
        title: 'Learn Python, Break Python',
        description: 'A Beginner\'s Guide to Programming',
        labels: ['python', 'e-book'],
        url: 'http://learnpythonbreakpython.com/'
      },
      {
        title: 'rl.js',
        description: 'JavaScript library to build canvas roguelikes',
        labels: ['javascript', 'gaming'],
        url: 'https://github.com/scotchfield/rl.js'
      },
      {
        title: 'No Thank You, Website!',
        description: 'An open-source Chrome productivity extension',
        labels: ['javascript', 'chrome'],
        url: 'https://github.com/scotchfield/no-thank-you-website'
      },
      {
        title: 'Arcadia',
        description: 'An open web-based game engine',
        labels: ['php'],
        url: 'https://github.com/scotchfield/arcadia'
      },
    ];

    return (
      <div className='home'>
        <Header navigation={ 'projects' } />

        { projects.map((project, i) => {
          return <ProjectColumn detail={ project } key={ i }/>;
        }) }
      </div>
    );
  }
}

export default Projects;
