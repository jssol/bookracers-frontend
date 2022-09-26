import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { delcat } from '../../redux/category/delcatSlice';

function DelCategory() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  const navigate = useNavigate();

  const state = {
    id,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(delcat(state));
    navigate('/categories');
  };

  return (
    <>
      <form className="form-container" onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Category ID"
          name="id"
          className="form-input"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit" className="form-button button">
          Delete Category
        </button>
      </form>
    </>
  );
}

export default DelCategory;
