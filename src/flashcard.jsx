import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createAnswer = this.createAnswer.bind(this);
    this.createOptions = this.createOptions.bind(this);
    this.validateAnswer = this.validateAnswer.bind(this);
  }

  createAnswer = answer => (
    <Button name={answer} label={answer} onClick={this.validateAnswer} />
  )

  createOptions = options => (
    options.map(this.createAnswer)
  )

  validateAnswer(selection) {
    const { answer } = this.props.input;
    if (selection === answer) {
      console.log(selection, answer);
    } else {
      console.log(selection, answer);
    }
  }


  render() {
    const { input } = this.props;
    const {
      question,
      options,
    } = input;

    return (
      <div>
        <h2>{ question }</h2>
        {this.createOptions(options)}
      </div>
    );
  }
}

Flashcard.propTypes = {
  input: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    answer: PropTypes.string,
  }),
};

Flashcard.defaultProps = {
  input: {
    question: 'Question Default',
    options: [
      'Answer A Default',
      'Answer B Default',
    ],
    answer: 'Answer A Default',
  },
};

export default Flashcard;
