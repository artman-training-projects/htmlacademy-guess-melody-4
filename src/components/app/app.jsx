import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist/question-artist.jsx';
import QuestionGenreScreen from '../question-genre/question-genre.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {errorsCount} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen
              errorsCount = {errorsCount}
              onWelcomeButtonClick = {() => {}}
            />
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtistScreen />
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenreScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
