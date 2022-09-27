import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delcat } from '../../redux/category/delcatSlice';
import './category.css';
import catimage1 from '../assets/images/cat1.png';
import catimage2 from '../assets/images/cat2.png';
import catimage3 from '../assets/images/cat3.png';
import catimage4 from '../assets/images/cat4.png';
import catimage5 from '../assets/images/cat5.png';
import catimage6 from '../assets/images/cat6.png';
import catimage7 from '../assets/images/cat7.png';
import catimage8 from '../assets/images/cat8.png';
import catimage9 from '../assets/images/cat9.png';

function CategoryCard({ category, index }) {
  const { catname, id } = category;
  const arr = [
    catimage1,
    catimage2,
    catimage3,
    catimage4,
    catimage5,
    catimage6,
    catimage7,
    catimage8,
    catimage9,
  ];

  const dispatch = useDispatch();
  const delHandler = (value) => {
    dispatch(delcat({ id: value }));
    window.location.reload();
  };

  return (
    <div className="card">
      <Link to={`/categories/${id}`}>
        <div>
          <img src={arr[index]} alt=" " className="card-img" />
        </div>
        <h3>{catname}</h3>
      </Link>
      {localStorage.getItem('isAdmin') === 'true' ? (
        <button
          type="button"
          className="delCatBtn"
          value={id}
          onClick={(e) => delHandler(e.target.value)}
        >
          Delete
        </button>
      ) : null}
    </div>
  );
}

CategoryCard.defaultProps = {
  category: {
    catname: '',
    id: 0,
  },
  index: 0,
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    catname: PropTypes.string,
    id: PropTypes.number,
  }),
  index: PropTypes.number,
};

export default CategoryCard;
