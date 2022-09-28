import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch } from 'react-redux';
import MotorcycleCard from './MotorcycleCard';
import './motorcycle.scss';
import './modal.css';
import Navbar from '../navigation/Navbar';
import newotorcycle from '../../redux/motorcycle/motorcyle.service';
import Toggle from '../navigation/Toggle';

function MotorcycleList() {
  const params = useParams();
  const [motorcycles, setMotorcycles] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(new Date());
  const [brand, setBrand] = useState('');
  const [image, setImage] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:3001/api/v1/categories/${params.id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        },
      );
      setMotorcycles(response.data);
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const submitHandler = (e) => {
    e.preventDefault();
    if (model === '' || year === '' || brand === '' || image === '' || rentalPrice === '') {
      setMessage('Please fill all the fields');
    } else {
      // imge upload
      const formData = new FormData();
      formData.append('post[image]', image);
      formData.append('post[model]', model);
      formData.append('post[year]', year);
      formData.append('post[brand]', brand);
      formData.append('post[rental_price]', rentalPrice);
      formData.append('post[category_id]', params.id);
      console.log(formData);
      dispatch(newotorcycle(formData));
      // addedMotor(true);
      setMessage('Motorcycle created successfully');
    }
  };

  return (
    <div className="motorcycle-list">
      <Navbar />
      <Toggle />
      <div className="motorcycle-list-header-container">
        <h2 className="model-header m-header">LATEST MODELS</h2>
        <p className="model-header modelheader-ptag">Check out the latest models from our partners</p>
      </div>

      <div>
        {motorcycles.length
          ? motorcycles.map((motorcycle) => (
            <MotorcycleCard key={nanoid()} motor={motorcycle} />
          ))
          : null}
      </div>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header>
          <div className="bg-dark p-3">
            <CloseButton variant="white" />
          </div>
          <Modal.Title><h2>Add New Motocycle</h2></Modal.Title>
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
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <input type="hidden" name="category" value={params.id} />
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
        {/* <Modal.Footer>
              </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default MotorcycleList;
