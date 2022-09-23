import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';

function MotorcycleCard({ motor }) {
  const params = useParams();
  const { catname, id, motorcycles } = motor;

  return (
    <>
      <h2>
        Category Name:
        {catname}
      </h2>
      <h2>
        Category ID:
        {id}
      </h2>
      {motorcycles.length
        ? motorcycles.map((el) => (
          <Link to={`/categories/${params.id}/motorcycles/${el.id}`} key={nanoid()}>
            <div className="card">
              <ul>
                <li>
                  Motorcycle Model:
                  {' '}
                  {el.model}
                </li>
                <li>
                  ID:
                  {' '}
                  {el.id}
                </li>
              </ul>
              { el.image && (<img src={el.image} alt="" className="imgSize" />) }
            </div>
          </Link>
        ))
        : null}
    </>
  );
}

MotorcycleCard.defaultProps = {
  motor: {
    catname: '',
    id: '',
    motorcycles: [],
  },
};

MotorcycleCard.propTypes = {
  motor: PropTypes.shape({
    catname: PropTypes.string,
    id: PropTypes.number,
    motorcycles: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string,
        category_id: PropTypes.number,
        image: PropTypes.string,
        model: PropTypes.string,
        rental_price: PropTypes.number,
        year: PropTypes.string,
      }),
    ),
  }),
};

export default MotorcycleCard;
