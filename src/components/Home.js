// @flow
import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { signIn } from '../actions/actions';
import { Container } from 'semantic-ui-react';

type Props = {
  create: (creds: Object) => void,
  history: {
    push(pathname: Object): void
  },
  spinner?: Boolean
};
type iState = {
  email: string,
  password: string,
  errors: any,
  loading: boolean
};
class Home extends Component<Props, iState> {
  state: iState = {
    email: '',
    password: '',
    errors: {},
    loading: false
  };

  handleChange = (e: *) => {
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
  ///submit
  handleSubmit = (e: *) => {
    e.preventDefault();
    console.log(this.props, 'from home');
    this.props.create(this.state);
    //validation
    let errors = {};
    if (this.state.email === '') errors.email = 'Cant be empty';
    if (this.state.password === '') errors.password = 'Cant be empty';
    this.setState({
      errors
    });
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      this.setState({
        loading: true
      });
      this.redirect();
    }
    this.setState({
      loading: false
    });
  };
  redirect = () => {
    return this.props.history.push({
      pathname: '/games'
    });
  };
  render() {
    const { spinner } = this.props;
    const { loading } = this.state;
    return (
      <Container>
        <form
          className={classnames('ui', 'form', {
            loading: this.state.loading && spinner
          })}
          onSubmit={this.handleSubmit}
        >
          <h1>Login</h1>
          <div
            className={classnames('field', { error: this.state.errors.email })}
          >
            <label htmlFor='title'>Email</label>
            <input
              id='email'
              name='email'
              value={this.state.email || ''}
              // placeholder={as ? as.title : ''}
              onChange={this.handleChange}
            />
            <span>{this.state.errors.email}</span>
          </div>
          <div
            className={classnames('field', {
              error: this.state.errors.password
            })}
          >
            <label htmlFor='password'>password</label>
            <input
              id='password'
              name='password'
              value={this.state.password || ''}
              // placeholder={as ? as.password : ''}
              onChange={this.handleChange}
              type='password'
            />
            <span>{this.state.errors.password}</span>
          </div>
          <div className='field'>
            <button className='ui primary button'>Login</button>
          </div>
        </form>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    create: creds => {
      dispatch(signIn(creds));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Home);
