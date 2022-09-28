import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delcat } from '../../redux/category/delcatSlice';
import './category.css';

function CategoryCard({ category }) {
  const { catname, id, image } = category;
  const dispatch = useDispatch();
  const delHandler = (value) => {
    dispatch(delcat({ id: value }));
    window.location.reload();
  };

  return (
    <div className="card">
      <Link to={`/categories/${id}`}>
        <div>
          <img
            src={image.record.img}
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
  },
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    catname: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.shape({
      record: PropTypes.shape({
        img: PropTypes.string,
      }),
    }),
  }),
};

export default CategoryCard;
