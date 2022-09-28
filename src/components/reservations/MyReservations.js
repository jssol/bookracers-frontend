import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import Navbar from '../navigation/Navbar';
import Toggle from '../navigation/Toggle';
import './myreservations.scss';
import { delres } from '../../redux/reservations/delresSlice';
import { cancelmotor } from '../../redux/motorcycle/cancelmotorSlice';

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
    dispatch(delres({ id: value }));
    navigate('/categories');
  };

  const cancelHandler = (value) => {
    const state = { id: value, reserved: false };
    dispatch(cancelmotor(state));
  };

  return (
    <>
      <div className="wrapper">
        <div>
          <Navbar />
          <Toggle />
        </div>
        <div className="myres-container">
          <h1>My Reservations</h1>
          <div className="reservations">
            <table>
              <thead>
                <tr>
                  <th>Reserve ID</th>
                  <th>Motor ID</th>
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
                        <td>{reservation.id}</td>
                        <td>
                          <Link
                            to={`/categories/:id/motorcycles/${reservation.motorcycle_id}`}
                            style={{
                              color: '#97bf36',
                              border: '1px solid #97bf36',
                              padding: '0.5rem',
                            }}
                          >
                            {reservation.motorcycle_id}
                          </Link>
                        </td>
                        <td>{reservation.start_date}</td>
                        <td>{reservation.end_date}</td>
                        <td>
                          $
                          {reservation.total_price}
                        </td>
                        <td>{reservation.city}</td>
                        <td>
                          <button
                            type="button"
                            className="cancelBtn"
                            value={reservation.id}
                            onClick={(e) => {
                              delHandler(e.target.value);
                              cancelHandler(reservation.motorcycle_id);
                            }}
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
