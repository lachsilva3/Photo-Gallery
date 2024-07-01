import React from 'react';
import PictureCard from './PictureCard';
import { CardCss } from './styles/CardCss';

const imageList = [
  { src: '/images/img1.jpg', title: 'Barberton daisy' },
  { src: '/images/img2.jpg', title: 'Crown of thorns' },
  { src: '/images/img3.jpg', title: 'Pink rain lily' },
  { src: '/images/img4.jpg', title: 'Lance leaved coreopsis' },
  { src: '/images/img5.jpg', title: 'Dendrobium nobile' },
  { src: '/images/img6.jpg', title: 'Sunflower' },
 
];

const Gallery = () => {
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

export default Gallery;