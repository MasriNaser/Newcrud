import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import StoryRouter from 'storybook-react-router';

import GameCard from '../components/GameCard';
const i = {
  logoUrl: 'https://loremflickr.com/g/320/240/paris',
  title: 'component title',
  id: 3,
  username: 'naser'
};
const stories = storiesOf('GameCard', module);
stories.addDecorator(StoryRouter());

const styling = {
  padding: 10
};
stories.add('With Text', () => (
  <GameCard onDelete={action('clicked')} i={i} style={styling} />
));
