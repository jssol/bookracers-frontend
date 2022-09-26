import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import MotorcycleCard from './MotorcycleCard';
import './motorcycle.scss';
import Navbar from '../navigation/Navbar';

function MotorcycleList() {
  const params = useParams();
  const [motorcycles, setMotorcycles] = useState([]);

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

  return (
    <div className="wrapper">
      <div>
        <Navbar />
      </div>
      <div className="motorcycle-list">
        <h2 className="model-header">LATEST MODELS</h2>
        <p className="model-header modelheader-ptag">
          Check out the latest models from our partners
        </p>
        {localStorage.getItem('isAdmin') === "true" 
        ? <button className='addbikebutton'><strong>+</strong>Add Motorcycle</button> : null}
        {motorcycles.length
          ? motorcycles.map((motorcycle) => (
            <MotorcycleCard key={nanoid()} motor={motorcycle} />
          ))
          : null}
      </div>
    </div>
  );
}

export default MotorcycleList;
