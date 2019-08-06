import 'semantic-ui-css/semantic.min.css';
import classnames from 'classnames';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import StoryRouter from 'storybook-react-router';
import GameForm from '../components/GameForm';
import configureStore from '../reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

const i = {
  id: 3,
  title: 'anything',
  cover: 'https://loremflickr.com/320/240/dog',
  username: 'name',
  errors: {},
  loading: false
};
const stories = storiesOf('GameForm', module);
stories.add('With Text', () => (
  <Container>
  <div className={classnames('ui', 'form', { loading: i.loading })}>
    <h1>Add new game</h1>
    <div className={classnames('field', { error: i.errors.title })}>
      <label htmlFor='title'>Title</label>
      <input
        id='title'
        name='title'
        placeholder={i ? i.title : ''}
        onChange={action('Anything')}
      />
      <span>{i.errors.title}</span>
    </div>
    <div className={classnames('field', { error: !!i.errors.cover })}>
      <label htmlFor='cover'>Cover URL</label>
      <input
        id='cover'
        name='cover'
        placeholder={i ? i.cover : ''}
        onChange={action('Name')}
        autoComplete='off'
        type='url'
      />
      <span>{i.errors.cover}</span>
    </div>
    <div className={classnames('field', { error: i.errors.username })}>
      <label htmlFor='userName'>username</label>
      <input
        id='username'
        name='username'
        placeholder={i ? i.username : ''}
        onChange={action('photo')}
      />
      <span>{i.errors.username}</span>
    </div>
    <div className='field'>
      {i.cover !== '' && (
        <img src={i.cover} alt='cover' className='ui small border image' />
      )}
    </div>
    <div className='field'>
      <button className='ui primary button' onClick={action('clicked')}>
        Save
      </button>
    </div>
  </div>
  </Container>
));
