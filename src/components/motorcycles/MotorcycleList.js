import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import MotorcycleCard from './MotorcycleCard';
import Navbar from '../navigation/Navbar';
import Toggle from '../navigation/Toggle';
import './motorlist.scss';

function MotorcycleList() {
  const params = useParams();
  const [motorcycles, setMotorcycles] = useState([]);
  const [catname, setCatname] = useState('');

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
      setCatname(response.data.catname);
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="wrapper">
      <div>
        <Navbar />
        <Toggle />
      </div>
      <div className="motorcycle-list">
        <div className="motorcycle-list-header-container">
          <h2 className="model-header m-header">LATEST MODELS</h2>
          <p className="model-header modelheader-ptag">
            Check out the latest models from our partners
          </p>
          <div className="model-name">
            <p>
              Category
              {' '}
              {params.id}
              {' '}
              {catname}
            </p>
          </div>
        </div>
        <div>
          {motorcycles.length
            ? motorcycles.map((motorcycle) => (

              <MotorcycleCard key={nanoid()} motor={motorcycle} />

            ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default MotorcycleList;
