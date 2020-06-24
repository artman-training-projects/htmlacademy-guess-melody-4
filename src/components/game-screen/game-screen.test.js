import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from './game-screen.jsx';
import {GameType} from '../../const.js';

const children = <div className="children-component" />;

describe(`GameScreen`, () => {
  it(`Render with GameType.ARTIST`, () => {
    const tree = renderer.create(
        <GameScreen type={GameType.ARTIST} >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render with GameType.GENRE`, () => {
    const tree = renderer.create(
        <GameScreen type={GameType.GENRE} >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
