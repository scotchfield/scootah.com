import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Game from './components/Game';

import Routes from './routes';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <div className="container-fluid text-center">
    <Routes history={browserHistory} />
    <Game />
  </div>,
  document.getElementById('root')
);
