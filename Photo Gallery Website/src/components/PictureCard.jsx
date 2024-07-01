import React from 'react';
import { CardCss } from './styles/CardCss';

const PictureCard = ({ src, title }) => {
  return (
    <CardCss >
    <div className="card">
      <img src={src} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
    </CardCss>
  );
};

export default PictureCard;