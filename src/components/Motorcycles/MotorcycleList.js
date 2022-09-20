import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import MotorcycleCard from './MotorcycleCard';

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
  }, []);
  return (
    <div>
      MotorcycleList
      {params.id}
      {' '}
      {motorcycles.length
        ? motorcycles.map((motorcycle) => (
          <MotorcycleCard key={nanoid()} motorcycle={motorcycle} />
        ))
        : null}
    </div>
  );
}

export default MotorcycleList;
