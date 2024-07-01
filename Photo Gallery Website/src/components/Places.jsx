import React from 'react';
import PictureCard from './PictureCard';
import { CardCss } from './styles/CardCss';

const imageList = [
  { src: '/images/img19.jpg', title: 'Kurdi Goa' },
  { src: '/images/img20.jpg', title: 'Velankanni Church' },
  { src: '/images/img21.jpg', title: 'Cabo De Rama Goa' },
  { src: '/images/img22.jpg', title: 'Harvallem Waterfall Goa' },
  { src: '/images/img23.jpg', title: 'Pennsylvania' },
  { src: '/images/img24.jpg', title: 'Dona Paula Goa' },
 
];

const Places = () => {
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

export default Places;