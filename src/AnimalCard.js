import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({ name, scientificName, size, diet, additional, showAdditional, image }) {
  return (
    <div className="animal-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="info-box">Scientific Name: {scientificName}</div>
      <div className="info-box">{size} kg</div>
      <div className="info-box">{diet.join(', ')}.</div>
      <button className="more-info-btn" onClick={() => showAdditional(additional)}>
        More Info
      </button>
    </div>
  );
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  showAdditional: PropTypes.func.isRequired,
  image: PropTypes.string
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
};