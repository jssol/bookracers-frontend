import React, { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import CategoryCard from './CategoryCard';
import Navbar from '../navigation/Navbar';
import Toggle from '../navigation/Toggle';
import 'swiper/css/bundle';
import '../assets/styles/catpage.scss';
import '../assets/styles/swiper.scss';
import BASE_URL from '../../redux/api';

const CategoriesPage = () => {
  const [catsList, setCatsList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}api/v1/categories`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      setCatsList(response.data);
    };

    fetchData().catch((error) => {
      setError(error.message);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="wrapper">
        <div>
          <Navbar />
          <Toggle />
        </div>
        <div className="category-container">
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={5}
            slidesPerView="auto"
            centeredSlides
            navigation
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {catsList.length
              ? catsList.map((cat) => (
                <SwiperSlide key={nanoid()}>
                  <CategoryCard key={nanoid()} category={cat} />
                </SwiperSlide>
              ))
              : null}
            {error ? <div>{error}</div> : null}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
