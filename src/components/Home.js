// @flow
import React, { Component } from 'react';
import classnames from 'classnames';

type Props = {
  
};
type iState = {
  email: string,
  password: string,
  errors: any,
  loading: boolean
};
export default class Home extends Component<Props, iState> {
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
      setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 1000);
      // reset
      this.reset();
    }
  };
  // reset
  reset = () => {
    this.setState({
      email: '',
      password: ''
    });
  };
  render() {
    return (
      <form
        className={classnames('ui', 'form', { loading: this.state.loading })}
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
          className={classnames('field', { error: this.state.errors.password })}
        >
          <label htmlFor='password'>password</label>
          <input
            id='password'
            name='password'
            value={this.state.password || ''}
            // placeholder={as ? as.password : ''}
            onChange={this.handleChange}
          />
          <span>{this.state.errors.password}</span>
        </div>
        <div className='field'>
          <button className='ui primary button'>Login</button>
          <button className='ui primary button'>Logout</button>
        </div>
      </form>
    );
  }
}
