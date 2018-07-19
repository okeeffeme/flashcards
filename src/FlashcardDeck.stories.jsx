import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import FlashcardDeck from './FlashcardDeck';

storiesOf('Flashcard Deck', module)
  .add('hello', () => (
    <FlashcardDeck />
  ));
