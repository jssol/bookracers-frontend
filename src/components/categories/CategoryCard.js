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
  const delHandler = (value) => {
    dispatch(delcat({ id: value }));
    window.location.reload();
  };

  return (
    <>
      <NavLink to={`/categories/${id}`} className="card">
        <FillerCard title={catname} />
        <div>
          {image ? (
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
          ) : (
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
          )}
        </div>
      </NavLink>
      <div>
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
    </>
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
