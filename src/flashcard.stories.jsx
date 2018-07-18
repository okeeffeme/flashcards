import React from 'react';
import {storiesOf} from '@storybook/react';

import {action} from '@storybook/addon-actions';

import Flashcard from './flashcard';

storiesOf('Flashcard', module)
  .add('hello', () => (
    <Flashcard />
  ));
