import React from 'react';
import PropTypes from 'prop-types';

function MotorcycleCard({ motorcycle }) {
  const { model, id, image } = motorcycle;
  return (
    <div className="card">
      <ul>
        <li>
          Motorcycle Model:
          {' '}
          {model}

        </li>
        <li>
          ID:
          {' '}
          {id}

        </li>
      </ul>
      { image && (<img src={image} alt="" className="imgSize" />) }
    </div>
  );
}

MotorcycleCard.defaultProps = {
  motorcycle: {
    model: '',
    image: '',
    id: 0,
  },
};

MotorcycleCard.propTypes = {
  motorcycle: PropTypes.shape({
    model: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default MotorcycleCard;
