import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import motorDetail from '../../redux/motorcycles/detail.service';
import reservation from '../../redux/reservations/reservation.service';
import totalPrice from '../../helpers/dateHandler';
import Navbar from '../navigation/Navbar';
import './reservation.css';

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
 
  return (
    <div className="wrapper">
      <div>
        <Navbar />
      </div>
      <div className="reservation-container">
        <h1>Make a Reservation</h1>
        <form className="form-container form-reserve" onSubmit={submitHandler}>
          {reserved && message === 'Motorcycle reserved successfully'
            ? <div className="alert alert-success" role="alert">{message}</div>
            : <div className="alert alert-danger" role="alert">{message}</div>}

          <div className="form-inputs">
            <div className="city">
              <input
                type="text"
                placeholder="City"
                name="city"
                className="form-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="start-date-sec">
              <p>Start Date</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="startDate"
                className="form-input"
                minDate={new Date()}
                required
              />
            </div>
            <div className="end-date-sec">
              <p> End Date</p>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                name="endDate"
                className="form-input"
                minDate={new Date()}
                required
              />
            </div>

          </div>
          <p>
            Total Price:
            {result}
          </p>
          {reserved ? (
            <button
              type="submit"
              className="btn-disbaled-reserve"
              disabled
            >
              Submit
            </button>
          ) : <button type="submit" className="btn-enable-reserve">Submit</button>}
        </form>
      </div>
    </div>
  );
};

export default Reservation;
