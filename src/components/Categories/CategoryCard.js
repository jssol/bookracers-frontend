import React from 'react';
import PropTypes from 'prop-types';
import './category.scss';
import { Link } from 'react-router-dom';
// import MotorcycleList from './MotorcycleList';

function CategoryCard({ category }) {
  const { catname, id } = category;
  return (
    <Link to={`/categories/${id}`}>
      <div className="card">
        {id}
        {' '}
        {catname}
        {/* <MotorcycleList catid={id} /> */}
      </div>
    </Link>
  );
}

CategoryCard.defaultProps = {
  category: {
    catname: '',
    id: 0,
  },
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    catname: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default CategoryCard;
