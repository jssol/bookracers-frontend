import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import Navbar from '../navigation/Navbar';
import './myreservations.scss';
import { delres } from '../../redux/reservations/delresSlice';

const MyReservations = () => {
  const [loading, setLoading] = useState(true);
  const [myreservations, setMyReservations] = useState([]);
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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const delHandler = (value) => {
    console.log(value);
    dispatch(delres({ id: value }));
    navigate('/categories');
  };

  return (
    <>
      <div className="wrapper">
        <div>
          <Navbar />
        </div>
        <div className="myres-container">
          <h1>My Reservations</h1>
          <div className="reservations">
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Reservation ID</th>
                  <th>Motorcycle ID</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Total Price</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading === false
                  && Object.values(myreservations)
                    .filter((reservation) => reservation.user_id === user)
                    .map((reservation) => (
                      <tr key={nanoid()}>
                        <td>{reservation.user_id}</td>
                        <td>{reservation.id}</td>
                        <Link to={`/motorcycles/${reservation.motorcycle_id}`}>
                        <td>{reservation.motorcycle_id}</td>
                        </Link>
                        <td>{reservation.start_date}</td>
                        <td>{reservation.end_date}</td>
                        <td>{reservation.total_price}</td>
                        <td>{reservation.city}</td>
                        <td>
                          <button
                            type="button"
                            className="cancelBtn"
                            value={reservation.id}
                            onClick={(e) => delHandler(e.target.value)}
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyReservations;
