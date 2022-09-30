import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import MotorcycleCard from './MotorcycleCard';
import Navbar from '../navigation/Navbar';
import newotorcycle from '../../redux/motorcycle/motorcyle.service';
import Toggle from '../navigation/Toggle';
import './motorlist.scss';
import BASE_URL from '../../redux/api';

const MotorcycleList = () => {
  const params = useParams();
  const [motorcycles, setMotorcycles] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(new Date());
  const [brand, setBrand] = useState('');
  const [picture, setPicture] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}api/v1/categories/${params.id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        },
      );
      setMotorcycles(response.data);
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      model === ''
      || year === ''
      || brand === ''
      || picture === ''
      || rentalPrice === ''
    ) {
      setMessage('Please fill all the fields');
    } else {
      const motorData = new FormData();
      motorData.append('motorcycle[picture]', picture);
      motorData.append('motorcycle[model]', model);
      motorData.append('motorcycle[year]', year);
      motorData.append('motorcycle[brand]', brand);
      motorData.append('motorcycle[rental_price]', rentalPrice);
      motorData.append('motorcycle[category_id]', params.id);
      motorData.append('motorcycle[reserved]', false);
      dispatch(newotorcycle(motorData));
      navigate(`/categories/${params.id}`);
      setMessage('Motorcycle created successfully');
    }
  };

  return (
    <div className="wrapper">
      <div>
        <Navbar />
        <Toggle />
      </div>
      <div className="motorlist-header">
        {message === 'Motorcycle created successfully' ? (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
      </div>
      {localStorage.getItem('isAdmin') === 'true' ? (
        <button type="button" className="addMotorBtn" onClick={handleShow}>
          <strong>+</strong>
          Add Motorcycle
        </button>
      ) : null}
      {motorcycles.length
        ? motorcycles.map((motorcycle) => (
          <MotorcycleCard key={nanoid()} motor={motorcycle} />
        ))
        : null}

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header>
          <div className="closeModalBtn">
            <FaTimes onClick={handleClose} />
          </div>
          <Modal.Title>
            <h2>Add New Motorcycle</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content">
          <form className="form-container" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Brand"
              name="brand"
              className="form-input"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Model"
              name="model"
              className="form-input"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />

            <DatePicker
              selected={year}
              onChange={(year) => setYear(year)}
              name="year"
              className="form-input"
              showYearPicker
              dateFormat="yyyy"
              required
            />
            <input
              type="number"
              placeholder="Rental Price"
              name="rental_price"
              className="form-input"
              value={rentalPrice}
              onChange={(e) => setRentalPrice(e.target.value)}
              min="0"
              required
            />
            <input
              type="file"
              name="image"
              className="form-input"
              onChange={(e) => setPicture(e.target.files[0])}
              required
            />
            <Button
              type="submit"
              variant="success"
              onClick={handleClose}
              className="form-button button"
            >
              Add Motorcycle
            </Button>
          </form>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default MotorcycleList;
