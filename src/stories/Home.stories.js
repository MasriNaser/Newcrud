import 'semantic-ui-css/semantic.min.css';
import classnames from 'classnames';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Home from '../components/Home';
import configureStore from '../reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

const store = configureStore();

const withProvider = story => (
  <BrowserRouter>
    <Provider store={store}>{story()}</Provider>
  </BrowserRouter>
);
const stories = storiesOf('Home', module);

stories
  .addDecorator(withProvider)
  .add('With Text', () => (
    <Home spinner={false} onChange={action('onchange')} onClick={action('clicked')}/>
  ));