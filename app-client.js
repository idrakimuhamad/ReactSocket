import React from 'react';
import { render } from 'react-dom';
import { Router, Route, DefaultRoute, IndexRoute, browserHistory } from 'react-router';

// components
import { App } from './components/app';
import { Audience } from './components/Audience';
import { Speaker } from './components/Speaker';
import { Board } from './components/Board';
import { NotFound } from './components/404';

render((
  <Router history={ browserHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={Audience} />
      <Route name="speaker" path="speaker" component={Speaker} />
      <Route name="board" path="board" component={Board} />
      <Route name="notfound" path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('react-root'));
