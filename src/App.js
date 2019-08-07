// @flow
import React, { Component } from 'react';
import GamesPage from './components/GamesPage';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GamesForm from './components/GameForm';
import Home from './components/Home';

type Props = {
  component: Object
};
class App extends Component<Props> {
  render() {
    return (
      <div className='ui container'>
        <div className='ui three item menu'>
          <Link
            className='item'
            activeclassname='active'
            activeonlywhenexact='true'
            to='/home'
          >
            Home
          </Link>
          <Link
            className='item'
            activeclassname='active'
            activeonlywhenexact='true'
            to='/games'
          >
            Game
          </Link>
          <Link
            className='item'
            activeclassname='active'
            activeonlywhenexact='true'
            to='/games/new'
          >
            Add a new game
          </Link>
        </div>
        <Switch>
          <Route exact path='/games' component={GamesPage} />
          <Route exact path='/games/new' component={GamesForm} />
          <Route exact path='/game/:id' component={GamesForm} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;
