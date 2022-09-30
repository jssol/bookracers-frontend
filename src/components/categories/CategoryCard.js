import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FillerCard from '../shared/FillerCard';
import { delcat } from '../../redux/category/delcatSlice';
import '../assets/styles/catcard.scss';
import BASE_URL from '../../redux/api';

const CategoryCard = ({ category }) => {
  const {
    catname, id, image, picture,
  } = category;
  const dispatch = useDispatch();
  const delHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { value } = e.target;
    dispatch(delcat({ id: value }));
    window.location.reload();
  };

  return (
    <NavLink to={`/categories/${id}`} className="card">
      <FillerCard title={catname} />
      <div>
        {picture ? (
          <img
            src={`${BASE_URL}${picture}`}
            alt=" "
            className="card-img"
            style={{
              display: 'block',
              width: '150px',
              height: '150px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        ) : (
          <img
            src={image}
            alt=" "
            className="card-img"
            style={{
              display: 'block',
              width: '150px',
              height: '150px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        )}
      </div>
      {localStorage.getItem('isAdmin') === 'true' ? (
        <button
          type="button"
          className="delCatBtn"
          value={id}
          onClick={(e) => delHandler(e)}
        >
          Delete
        </button>
      ) : null}
    </NavLink>
  );
};

CategoryCard.defaultProps = {
  category: {
    catname: '',
    id: 0,
    image: '',
    picture: '',
  },
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    catname: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    picture: PropTypes.string,
  }),
};

export default CategoryCard;
