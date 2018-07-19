import React from 'react';
import PropTypes from 'prop-types';

import Flashcard from './Flashcard';

/* eslint-disable-next-line react/prefer-stateless-function */
class FlashcardDeck extends React.Component {
  createCard = input => (
    <Flashcard input={input} />
  )

  createCards = deck => (
    deck.map(this.createCard)
  )

  render() {
    const { deck } = this.props;
    return (
      <div>
        {this.createCards(deck)}
      </div>
    );
  }
}

FlashcardDeck.propTypes = {
  deck: PropTypes.arrayOf(Flashcard.propTypes.card),
};

FlashcardDeck.defaultProps = {
  deck: [
    {
      question: 'Question 1 Default Deck',
      options: [
        'Answer A Default Deck',
        'Answer B Default Deck',
      ],
      answer: 'Answer A Default Deck',
    },
    {
      question: 'Question 2 Default Deck',
      options: [
        'Answer C Default Deck',
        'Answer D Default Deck',
      ],
      answer: 'Answer C Default Deck',
    },
  ],
};

export default FlashcardDeck;
