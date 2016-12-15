import React, { Component } from 'react';

import Header from '../Header';
import ProjectColumn from '../ProjectColumn';

import './style.css';

class Projects extends Component {
  render() {
    let projects = [
      {
        title: 'Arcadia',
        description: 'An open web-based game engine',
        labels: ['php'],
        url: 'https://github.com/scotchfield/arcadia'
      },
      {
        title: 'ElasticSearch with React',
        description: 'An example project showing how to use Elasticsearch with React',
        labels: ['elasticsearch', 'react', 'javascript'],
        url: 'https://github.com/scotchfield/elasticsearch-react-example'
      }
    ];

    return (
      <div className='home'>
        <Header navigation={ 'projects' } />

        <div className='row'>
          { projects.map((project, i) => {
            return <ProjectColumn detail={ project } key={ i }/>;
          }) }
        </div>
      </div>
    );
  }
}

export default Projects;
