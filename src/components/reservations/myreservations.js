import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import myReservations from '../../redux/reservations/myreservations.service';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.reservation);
  console.log(reservations);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (reservations.length === 0) {
      dispatch(myReservations(user));
    }
  }, [dispatch, reservations, user]);

  return (
    <div className="my-reservations-container">
      <h1>My Reservations</h1>
      <div className="reservations">
        <div className="reservations-header">
          <p>  Start Date</p>
          <p>  End Date</p>
          <p>  Total Price</p>
          <p>   City</p>
        </div>
        { reservations.map((reservation) => (
          <div className="myreservation" key={reservation.id}>
            <p>{reservations.start_date}</p>
            <p>{reservations.end_date}</p>
            <p>{reservations.total_price}</p>
            <p>{reservations.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyReservations;
