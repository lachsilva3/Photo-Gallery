import React from 'react';
import PictureCard from './PictureCard';
import { CardCss } from './styles/CardCss';

const imageList = [
  { src: '/images/img7.jpg', title: 'Natural Pinkish Gradient Sky' },
  { src: '/images/img8.jpg', title: 'Crescent moon' },
  { src: '/images/img9.jpg', title: 'Spooky night sky' },
  { src: '/images/img10.jpg', title: 'Sun Set Vibe' },
  { src: '/images/img11.jpg', title: 'Hell Stormy Sky' },
  { src: '/images/img12.jpg', title: 'KeyBoard' },
 
];

const LowLight = () => {
  return (
    <CardCss>
    <div className="content">
      {imageList.map((image, index) => (
        <PictureCard
          key={index}
          src={image.src}
          title={image.title}
        />
      ))}
    </div>
    </CardCss>
  );
};

export default LowLight;