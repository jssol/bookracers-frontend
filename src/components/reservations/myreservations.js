import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
// import { fetchMyRes } from '../../redux/reservations/myreserveSlice';
import Navbar from '../navigation/Navbar';
import './myreservations.scss';

const MyReservations = () => {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [myreservations, setMyReservations] = useState([]);
  // const myreservations = useSelector(
  //   (state) => state.myreservation.myreservation,
  // );
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'http://localhost:3001/api/v1/reservations',
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        },
      );
      setLoading(false);
      setMyReservations(response.data.reservation);
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="wrapper">
        <div>
          <Navbar />
        </div>
        <div className="myres-container">
          <h1>My Reservations</h1>
          <div className="reservations">
            <div className="reservations-header">
              <p> User ID</p>
              <p> Reservation ID</p>
              <p> Motorcycle ID</p>
              <p> Start Date</p>
              <p> End Date</p>
              <p> Total Price</p>
              <p> City</p>
            </div>
            <div>
              {loading === false
                && Object.values(myreservations)
                  .filter((reservation) => reservation.user_id === user)
                  .map((reservation) => (
                    <div className="myreservation" key={nanoid()}>
                      <p>{reservation.user_id}</p>
                      <p>{reservation.id}</p>
                      <p>{reservation.motorcycle_id}</p>
                      <p>{reservation.start_date}</p>
                      <p>{reservation.end_date}</p>
                      <p>
                        $
                        {reservation.total_price}
                      </p>
                      <p>{reservation.city}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyReservations;
