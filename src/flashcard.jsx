import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createAnswer = this.createAnswer.bind(this);
    this.createOptions = this.createOptions.bind(this);
  }

  createAnswer = answer => (
    <Button name={answer} label={answer} />
  )

  createOptions = options => (
    options.map(this.createAnswer)
  )

  render() {
    const { props } = this;
    const {
      question,
      options,
    } = props;

    return (
      <div>
        <h2>{ question }</h2>
        {this.createOptions(options)}
      </div>
    );
  }
}

Flashcard.propTypes = {
  question: PropTypes.string,
  options: PropTypes.array,

};

Flashcard.defaultProps = {
  question: 'Question Default',
  options: {
    q1: 'Answer A Default',
    q2: 'Answer B Default',
  },
};

export default Flashcard;
