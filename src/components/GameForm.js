import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveGame, fetchGame, upDateGame } from '../actions/actions';

class GameForm extends Component {
  state = {
    id: this.props.as ? this.props.as.id : null,
    title: this.props.as ? this.props.as.title : '',
    cover: this.props.as ? this.props.as.logoUrl : '',
    username: this.props.as ? this.props.as.username : '',
    errors: {},
    loading: false
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchGame(this.props.match.params.id);
    }
  }
  handleChange = e => {
    if (this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    //validation
    let errors = {};
    if (this.state.title === '') errors.title = 'Cant be empty';
    if (this.state.cover === '') errors.cover = 'Cant be empty';
    if (this.state.username === '') errors.username = 'Cant be empty';
    this.setState({
      errors
    });
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      this.setState({
        loading: true
      });
      const { id, title, cover, username } = this.state;
      if (id) {
        // update
        this.props.upDateGame({ id, title, cover, username }).then(newUser => {
          if (newUser.hasOwnProperty('payload') && newUser.payload.id) {
            setTimeout(() => {
              this.setState({
                loading: false
              });
            }, 1500);
          }
        });
      } else {
        this.props.saveGame({ title, cover, username }).then(newUser => {
          if (newUser.hasOwnProperty('payload') && newUser.payload.id) {
            setTimeout(() => {
              this.setState({
                loading: false
              });
            }, 1500);
          }
        });
      }
    }
    // reset
    this.reset();
  };
  // reset
  reset = () => {
    this.setState({
      title: '',
      username: '',
      cover: ''
    });
  };
  render() {
    const { as } = this.props;
    //console.log(as);
    return (
      <form
        className={classnames('ui', 'form', { loading: this.state.loading })}
        onSubmit={this.handleSubmit}
      >
        <h1>Add new as</h1>
        <div
          className={classnames('field', { error: this.state.errors.title })}
        >
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            name='title'
            value={this.state.title || ''}
            placeholder={as ? as.title : ''}
            onChange={this.handleChange}
          />
          <span>{this.state.errors.title}</span>
        </div>
        <div
          className={classnames('field', { error: !!this.state.errors.cover })}
        >
          <label htmlFor='cover'>Cover URL</label>
          <input
            id='cover'
            name='cover'
            value={this.state.cover || ''}
            placeholder={as ? as.cover : ''}
            onChange={this.handleChange}
            autoComplete='off'
            type='url'
          />
          <span>{this.state.errors.cover}</span>
        </div>
        <div
          className={classnames('field', { error: this.state.errors.username })}
        >
          <label htmlFor='userName'>username</label>
          <input
            id='username'
            name='username'
            value={this.state.username || ''}
            placeholder={as ? as.username : ''}
            onChange={this.handleChange}
          />
          <span>{this.state.errors.username}</span>
        </div>
        <div className='field'>
          {this.state.cover !== '' && (
            <img
              src={this.state.cover}
              alt='cover'
              className='ui small border image'
            />
          )}
        </div>
        <div className='field'>
          <button className='ui primary button'>Save</button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state, props) => {
  //console.log(props, 'from GameForm');
  // if (props.match.params.id) {
  let id = parseInt(props.match.params.id);
  return {
    as: state.games.items.find(item => item.id === id)
  };
  // }
  // return {
  //   as: null
  // };
};

export default connect(
  mapStateToProps,
  { saveGame, fetchGame, upDateGame }
)(GameForm);
