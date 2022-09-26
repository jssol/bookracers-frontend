import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import createCategory from '../../redux/category/category.service';

function AddCategory() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [cat, setCat] = useState(false);

  useEffect(() => {
    dispatch(createCategory());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === '' || image === '') {
      setMessage('Please fill all the fields');
    } else {
      const addcategory = {
        catname: name,
        image,
      };
      dispatch(createCategory(addcategory));
      setCat(true);
      setMessage('Category created successfully');
    }
  };

  return (
    <>
      <div className="add-category-form">

        <h2>Add New Category</h2>
        <form className="form-container" onSubmit={submitHandler} encType="multipart-form-data">
          {cat && message === 'Category created successfully'
            ? <div className="alert alert-success" role="alert">{message}</div>
            : <div className="alert alert-danger" role="alert">{message}</div>}
          <input
            type="text"
            placeholder="category name"
            name="catname"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="file"
            placeholder="category name"
            name="image"
            className="form-input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button type="submit" className="form-button button">
            Add Category
          </button>
        </form>
      </div>
    </>
  );
}

export default AddCategory;
