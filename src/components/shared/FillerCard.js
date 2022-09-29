import React, { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import '../assets/styles/FillerCard.scss';

const getColor = () => {
  const colors = ['navy', 'silver', 'orange', 'lime', 'teal', 'brown', 'burlywood', 'crimson'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const FillerCard = ({ title }) => {
  const [color] = useState(getColor());
  return (
    <div className="filler-card" style={{ backgroundColor: color }}>
      <h3 className="filler-card-title">{title}</h3>
      <BsPlayCircle />
    </div>
  );
};

FillerCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FillerCard;
