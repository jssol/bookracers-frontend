import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addcat } from '../../redux/category/addcatSlice';
import './addcategory.scss';
import Navbar from '../navigation/Navbar';
import Toggle from '../navigation/Toggle';

function AddCategory() {
  const dispatch = useDispatch();
  const [catname, setCatname] = useState('');
  const [picture, setPicture] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('category[catname]', catname);
    formdata.append('category[picture]', picture);

    dispatch(addcat(formdata));
    navigate('/categories');
  };

  const [file, setFile] = useState(undefined);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="wrapper">
        <div>
          <Navbar />
          <Toggle />
        </div>
        <div className="container">
          <h1>Add Category</h1>
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
              accept="image/*"
              placeholder="Image"
              name="image"
              className="form-input"
              onChange={(e) => {
                setPicture(e.target.files[0]);
                handleChange(e);
              }}
              required
            />
            {file && (
              <img
                src={file}
                style={{
                  display: 'block',
                  width: '150px',
                  height: '150px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                alt="category avatar"
              />
            )}
            <button type="submit" className="form-button button">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
