import React, { Component } from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import { fetchGames, deleteGame } from '../actions/actions';

class GamesPage extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }
  onDelete = id => {
    // get id
    this.props.deleteGame(id);
  };
  render() {
    //console.log(this.props.games, 'from GamesPage');
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
