import React, { useEffect } from 'react'
import { ContentCss } from './styles/ContentCss';


// Componets
import Gallery from './Gallery';
import LowLight from './LowLight';
import Food from './Food';
import Places from './Places';
import { AnimateCss } from './styles/AnimateCss';
import Footer from './Footer';


export default function Content() {

  return (

  
  
   
        <><div className='container'>

      <AnimateCss>

        {/*FLOWERS  */}
       
        <div data-aos="zoom-in">
        <h1 style={{ fontSize: '50px', marginTop: '10px', color: 'white' }}>Flowers</h1>
          <Gallery />
        </div>


        {/*LOW LIGHT  */}
        <div className='animation'>
          <h1 style={{ fontSize: '50px', marginTop: '10px', color: 'white' }}>Low Light</h1>
          <LowLight />
        </div>

        {/* FOODS */}

        <div className='animation'>
          <h1 style={{ fontSize: '50px', marginTop: '10px', color: 'white' }}>Foods</h1>
          <Food />
        </div>



        {/*PLACES */}

        <div className='animation'>
          <h1 style={{ fontSize: '50px', marginTop: '10px', color: 'white' }}>Places</h1>
          <Places />
        </div>
        <br></br>


      </AnimateCss>


    </div><Footer /></>
    
  )
}
