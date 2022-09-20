import React from 'react';
import PropTypes from 'prop-types';

function MotorcycleCard({ motorcycle }) {
  const { model, id } = motorcycle;
  return (
    <div>
      MotorcycleCard
      {model}
      {' '}
      {id}
    </div>
  );
}

MotorcycleCard.defaultProps = {
  motorcycle: {
    model: '',
    id: 0,
  },
};

MotorcycleCard.propTypes = {
  motorcycle: PropTypes.shape({
    model: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default MotorcycleCard;
