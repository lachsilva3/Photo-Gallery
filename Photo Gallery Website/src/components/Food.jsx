import React from 'react';
import PictureCard from './PictureCard';
import { CardCss } from './styles/CardCss';

const imageList = [
  { src: '/images/img13.jpg', title: 'BBQ Chicken' },
  { src: '/images/img14.jpg', title: 'Fried Chicken' },
  { src: '/images/img15.jpg', title: 'Pork Chops' },
  { src: '/images/img16.jpg', title: 'Chicken Schezwan Fried Rice' },
  { src: '/images/img17.jpg', title: 'Boiled Mud Crabs' },
  { src: '/images/img18.jpg', title: 'Huge Fish Thali' },
 
];

const Food = () => {
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

export default Food;