import React from 'react';
import { Router, Route } from 'react-router';

import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Projects from './components/Projects';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ Home } />
    <Route path="/about/" component={ About } />
    <Route path="/projects/" component={ Projects } />
    <Route path="*" component={ NotFound } />
  </Router>
);

export default Routes;
