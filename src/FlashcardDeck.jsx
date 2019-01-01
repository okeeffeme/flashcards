import React from 'react';
import PropTypes from 'prop-types';

import Flashcard from './Flashcard';
import Button from './Button';


/* eslint-disable-next-line react/prefer-stateless-function */
class FlashcardDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      correct: 0,
      incorrect: 0,
    };
    // this.onChange = this.onChange.bind(this);
    this.onCorrect = this.onCorrect.bind(this);
    this.onIncorrect = this.onIncorrect.bind(this);
    this.getNextCard = this.getNextCard.bind(this);
    // this.testButton = this.testButton.bind(this);
  }

  onCorrect() {
    const { index, correct } = this.state;
    const { deck } = this.props;
    if (index < deck.length) {
      this.setState({ index: index + 1, correct: correct + 1 });
    }
  }

  onIncorrect() {
    const { index, incorrect } = this.state;
    const { deck } = this.props;
    if (index < deck.length) {
      this.setState({ index: index + 1, incorrect: incorrect + 1 });
    }
  }

  getNextCard() {
    const { index } = this.state;
    const { deck } = this.props;
    let value = index;
    if (index < deck.length - 1) {
      value = index + 1;
    }
    return value;
  }

  createCard = input => (
    <Flashcard
      input={input}
      onCorrect={this.onCorrect}
      onIncorrect={this.onIncorrect}
    />
  )

  render() {
    const { index, correct, incorrect } = this.state;
    const { deck } = this.props;
    return (
      <div>
        <h2>Correct: {correct}</h2>
        <h2>Incorrect: {incorrect}</h2>
        {this.createCard(deck[index])}
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
        'Answer Correct 1 Default Deck',
        'Answer Incorrect 1 Default Deck',
      ],
      answer: 'Answer Correct Default Deck',
    },
    {
      question: 'Question 2 Default Deck',
      options: [
				'Answer Correct 2 Default Deck',
        'Answer Incorrect 2 Default Deck',
      ],
      answer: 'Answer Correct Default Deck',
    },
    {
      question: 'Question 3 Default Deck',
      options: [
				'Answer Correct 3 Default Deck',
        'Answer Incorrect 3 Default Deck',
      ],
      answer: 'Answer Correct Default Deck',
    },
  ],
};

export default FlashcardDeck;
