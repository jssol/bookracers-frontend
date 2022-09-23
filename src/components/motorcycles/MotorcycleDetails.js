import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h2>
        MotorcycleDetails
      </h2>
      <ul>
        <li>
          Motorcycle ID:
          {' '}
          {motorcycle.id}
        </li>
        <li>
          Model:
          {' '}
          {motorcycle.model}
        </li>
        <li>
          Brand:
          {' '}
          {motorcycle.brand}
        </li>
        <li>
          Category ID:
          {' '}
          {motorcycle.category_id}
        </li>
        <li>
          <img src={motorcycle.image} alt="" className="imgSize" />
        </li>
        <li>
          Rental Price: $
          {' '}
          {motorcycle.rental_price}
        </li>
      </ul>

    </div>
  );
}

export default MotorcycleDetails;
