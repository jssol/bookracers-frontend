import React, { Component } from 'react';
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

class CategoriesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catsList: [],
      error: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/v1/categories', {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        this.setState({
          catsList: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }

  render() {
    const { catsList, error } = this.state;
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
              slidesPerView="3"
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
  }
}

export default CategoriesPage;
