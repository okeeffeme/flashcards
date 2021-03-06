import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import Flashcard from './Flashcard';

storiesOf('Flashcard', module)
  .add('hello', () => (
    <Flashcard input={{ question: 'hello', options: ['a', 'b', 'c'], answer: 'a' }} />
  ));
