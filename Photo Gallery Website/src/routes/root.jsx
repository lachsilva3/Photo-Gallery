import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Content from "../components/Content";
import { BGimgCss } from "../components/styles/BGimgCss";


export default function Root() {
 
  return (
    
    <>
    <BGimgCss>
  <div className="App">
      <div className="fixed-bg">
      <Navbar/>
          <Content/>
       
      </div>
    </div>
    </BGimgCss>
          </>

  )
}
