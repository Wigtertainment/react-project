import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('mount')
  );
});