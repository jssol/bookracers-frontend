import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navigation/Navbar';
import Toggle from '../navigation/Toggle';
import './motordetails.scss';

function MotorcycleDetails() {
  const params = useParams();
  const [motorcycle, setMotorcycle] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:3001/api/v1/motorcycles/${params.mid}`,
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        },
      );
      setMotorcycle(response.data);
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="wrapper">
      <div>
        <Navbar />
        <Toggle />
      </div>
      <div className="motorcycle-details-container">
        <div className="motor-image">
          <img
            src={motorcycle.image}
            alt={motorcycle.brand}
          />
          <h1 className="motor-model">{motorcycle.model}</h1>
        </div>

        <div className="motor-info">

          <ul className="motor-spec-details">
            <li>
              Model:
              {motorcycle.model}
            </li>
            <li>
              Brand:
              {motorcycle.brand}
            </li>
            <li>
              Rental Price: $
              {motorcycle.rental_price}
            </li>
          </ul>
          <div>
            {motorcycle.reserved ? (
              <button type="button" className="reserved-btn" disabled>
                Reserved
              </button>
            ) : (
              <Link
                to={`/categories/${params.id}/motorcycles/${params.mid}/reservation`}
              >
                <button type="button" className="reserve-btn">
                  Reserve
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotorcycleDetails;
