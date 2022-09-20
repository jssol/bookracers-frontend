import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function MotorcycleCard({ motorcycle }) {
  const params = useParams();
  const { model, id, image } = motorcycle;

  return (
    <Link to={`/categories/${params.id}/motorcycles/${id}`}>
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
    </Link>
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
