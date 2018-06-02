import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Hello from './components/hello';

import Clock from './containers/clock';
import Search from './containers/autosuggest';
import Weather from './components/weather';


import store from './store';

const component = (
  <div className="network">
    <div className="greeter">
      <Hello name="Marty" />
      <Clock />
    </div>
    <Weather />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    {component}
  </Provider>,
  document.getElementById('container'),
);
