import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delcat } from '../../redux/category/delcatSlice';
import './category.css';

function CategoryCard({ category }) {
  const {
    catname, id, image, picture,
  } = category;
  const dispatch = useDispatch();
  const delHandler = (value) => {
    dispatch(delcat({ id: value }));
    window.location.reload();
  };

  console.log(category);

  return (
    <div className="card">
      <Link to={`/categories/${id}`}>
        <div>
          {picture ? (
            <img
              src={`http://localhost:3001${picture}`}
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
