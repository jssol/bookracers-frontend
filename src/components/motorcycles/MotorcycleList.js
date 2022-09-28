import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import Swiper from 'swiper/bundle';
import MotorcycleCard from './MotorcycleCard';
import './motorcycle.scss';
import Navbar from '../navigation/Navbar';
import Toggle from '../navigation/Toggle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

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
    </div>
  );
}

export default MotorcycleList;
