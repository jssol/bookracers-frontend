import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import MotorcycleCard from './MotorcycleCard';
import './motorcycle.scss';

function MotorcycleList() {
  const params = useParams();
  const [motorcycles, setMotorcycles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:3001/api/v1/categories/${params.id}`,
      );
      setMotorcycles(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const responsive = {
  //   superLargeDesktop: {
  // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <div className="motorcycle-list">
      <h2 className="model-header">LATEST MODELS</h2>
      <p className="model-header modelheader-ptag">Check out the latest models from our partners</p>

      <div>
        {/* <Carousel responsive={responsive} infinite> */}
        {motorcycles.length
          ? motorcycles.map((motorcycle) => (
            <MotorcycleCard key={nanoid()} motor={motorcycle} />
          ))
          : null}
        {/* </Carousel> */}
      </div>
    </div>
  );
}

export default MotorcycleList;
