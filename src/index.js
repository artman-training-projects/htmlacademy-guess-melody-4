import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import question from './mocks/questions.js';

const Settings = {
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App
      errorsCount = {Settings.ERRORS_COUNT}
      question = {question}
    />,
    document.querySelector(`#root`)
);
