import React from 'react';
import PropTypes from 'prop-types';
import './category.scss';

function CategoryCard(props) {
  const { category } = props;
  return (
    <div className="card">
      {category}
    </div>
  );
}

CategoryCard.defaultProps = {
  category: '',
};

CategoryCard.propTypes = {
  category: PropTypes.string,
};

export default CategoryCard;
