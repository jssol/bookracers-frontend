import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './category.scss';

function CategoryCard({ category }) {
  const { catname, id } = category;
  return (
    <Link to={`/categories/${id}`}>
      <div className="card">
        {id}
        {' '}
        {catname}
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
