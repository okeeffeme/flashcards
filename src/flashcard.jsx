import React from 'react';
import PropTypes from 'prop-types';

class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createAnswer = this.createAnswer.bind(this);
    this.createAnswers = this.createAnswers.bind(this);
  }

  createAnswer = (answer, onClick) => (
    <button type='button' onClick={onClick}>
      <p>
        { answer }
      </p>
    </button>
  )

  createAnswers = answers => (
    answers.map(this.createAnswer)
  )

  render() {
    const { props } = this;
    const {
      question,
      answers,
      onClick,
    } = props;

    const clickWrapper = (evt) => onClick(evt.target.value);

    return (
      <div>
        <h2>{ question }</h2>
      {this.createAnswers(answers)}
      </div>
    );
  }
}

Flashcard.propTypes = {
  question: PropTypes.string,
  answers: PropTypes.array,
  onClick: PropTypes.func,
};

Flashcard.defaultProps = {
  question: 'Question Default',
  answers: [
    'Answer A Default',
    'Answer B Default',
  ],
  onClick: (...args) => {
    console.log('button.defaultProps.onClick ', args);
  },
};

export default Flashcard;
