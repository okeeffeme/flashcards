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
    };
    // this.onChange = this.onChange.bind(this);
    this.getNextCard = this.getNextCard.bind(this);
    this.testButton = this.testButton.bind(this);
  }

  // onChange() {
  //   const { i } = this.state.index;
  //   this.setState({ index: i + 1 });
  // }

  getNextCard(deck) {
    const { index } = this.state;
    let value = index;
    if (index < deck.length - 1) {
      console.log(index, deck.length);
      value = index + 1;
    }
    return value;
  }

  createCard = input => (
    <Flashcard input={input} />
  )

  testButton() {
    this.setState({ index: this.getNextCard(this.props.deck) });
  }

  // createCards = deck => (
  //   deck.map(this.createCard)
  // )

  render() {
    const { index } = this.state;
    const { deck } = this.props;
    return (
      <div>
        {this.createCard(deck[index])}
        <Button name='test' label='test' onClick={this.testButton} />
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
    {
      question: 'Question 3 Default Deck',
      options: [
        'Answer E Default Deck',
        'Answer F Default Deck',
      ],
      answer: 'Answer E Default Deck',
    },
  ],
};

export default FlashcardDeck;
