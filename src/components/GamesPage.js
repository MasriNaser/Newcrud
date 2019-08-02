
// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import { fetchGames, deleteGame } from '../actions/actions';
type GamesPageProps ={
  fetchGames: ()=> void,
  deleteGame: (id: number)=> void,
  games: Object,
}

class GamesPage extends Component<GamesPageProps>{
  componentDidMount() {
    this.props.fetchGames();
  }
  onDelete = id => {
    // get id
    this.props.deleteGame(id);
  };
  render() {
    return (
      <div>
        <h1>Game Page</h1>
        <GamesList items={this.props.games} onDelete={this.onDelete} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    games: state.games.items
  };
}

export default connect(
  mapStateToProps,
  { fetchGames, deleteGame }
)(GamesPage);
