import React, { Component } from 'react';

import './style.css';

class ProjectColumn extends Component {
  render() {
    return (
      <div className='project-column col-sm-6 col-xs-12'>
        <h2>
          <a href={ this.props.detail.url }>
            { this.props.detail.title }
          </a>
        </h2>
        <h3>{ this.props.detail.description }</h3>
        { this.props.detail.labels.map((label, i) => {
          return <span className='project-label' key={ i }>{ label }</span>;
        }) }
      </div>
    );
  }
}

export default ProjectColumn;
