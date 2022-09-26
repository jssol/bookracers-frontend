import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addcat } from '../../redux/category/addcatSlice';

function AddCategory() {
  const dispatch = useDispatch();
  const [catname, setCatname] = useState('');
  const [img, setImg] = useState('');

  const navigate = useNavigate();

  const state = {
    catname,
    img,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addcat(state));
    navigate('/categories');
  };

  return (
    <>
      <form className="form-container" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Category Name"
          name="catname"
          className="form-input"
          value={catname}
          onChange={(e) => setCatname(e.target.value)}
          required
        />
        <input
          type="file"
          placeholder="Image"
          name="image"
          className="form-input"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          required
        />
        <button type="submit" className="form-button button">
          Add Category
        </button>
      </form>
    </>
  );
}

export default AddCategory;
