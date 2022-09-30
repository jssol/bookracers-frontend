import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import {
  FaFacebook, FaInstagram, FaTwitter, FaWhatsapp,
} from 'react-icons/fa';
import 'swiper/css/bundle';
import './swiper.css';
import './motorcard.scss';
import BASE_URL from '../../redux/api';

const MotorcycleCard = ({ motor }) => {
  const params = useParams();
  const { motorcycles } = motor;

  return (
    <>
      <div className="card-container">
        <Swiper
          centeredSlides
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView="auto"
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {motorcycles.length
            ? motorcycles.map((el) => (
              <SwiperSlide key={nanoid()}>
                <Link to={`/categories/${params.id}/motorcycles/${el.id}`} key={nanoid()}>

                  <div className="card card-content">
                    <div className="img-div">
                      { el.picture ? (<img src={`${BASE_URL}${el.picture}`} alt="" className="imgSize" />) : (<img src={el.image} alt="" className="imgSize" />)}
                    </div>
                    <ul>
                      <li className="model">
                        Motorcycle Model:
                        {' '}
                        {el.model}
                      </li>
                      <li className="content-id">
                        ID:
                        {' '}
                        {el.id}
                      </li>
                    </ul>
                    <div>
                      <i className="uil uil-star" />
                    </div>
                    <ul className="socials">
                      <li><FaFacebook /></li>
                      <li><FaInstagram /></li>
                      <li><FaTwitter /></li>
                      <li><FaWhatsapp /></li>
                    </ul>
                  </div>

                </Link>
              </SwiperSlide>
            ))
            : null}
        </Swiper>
      </div>
    </>
  );
};

MotorcycleCard.defaultProps = {
  motor: {
    catname: '',
    id: '',
    motorcycles: [],
  },
};

MotorcycleCard.propTypes = {
  motor: PropTypes.shape({
    catname: PropTypes.string,
    id: PropTypes.number,
    motorcycles: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string,
        category_id: PropTypes.number,
        image: PropTypes.string,
        model: PropTypes.string,
        rental_price: PropTypes.number,
        year: PropTypes.string,
      }),
    ),
  }),
};

export default MotorcycleCard;
