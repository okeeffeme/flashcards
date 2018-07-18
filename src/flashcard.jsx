import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createAnswer = this.createAnswer.bind(this);
    this.createAnswers = this.createAnswers.bind(this);
  }

  createAnswer = answer => (
    <Button name={answer} label={answer} />
  )

  createAnswers = answers => (
    answers.map(this.createAnswer)
  )

  render() {
    const { props } = this;
    const {
      question,
      answers,
    } = props;

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
};

Flashcard.defaultProps = {
  question: 'Question Default',
  answers: [
    'Answer A Default',
    'Answer B Default',
  ],
};

export default Flashcard;
