import React from 'react';
import PropTypes from 'prop-types';

const Dice = ({ number }) => {
  return <div className="dice">{number}</div>;
};

Dice.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Dice;