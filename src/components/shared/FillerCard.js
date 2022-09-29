import { BsPlayCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import '../assets/styles/FillerCard.scss';

const FillerCard = ({ title, color }) => (
  <div className={`${color} filler-card`}>
    {title}
    <BsPlayCircle />
  </div>
);

FillerCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default FillerCard;
