import React, { useState ,useContext} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { Outlet,NavLink, Link } from 'react-router-dom'
import { NavBarCss } from './styles/NavBarCss';
import { ModalCss } from './styles/ModalCss';

// images






function Navbar() {




  return <div>


<NavBarCss >
    <nav className="navbar navbar-expand-lg   navbar-dark bg-dark">
      <div className="container-fluid p-4">
 
     <h1 style={{color:"white"}}>Lach's Gallery</h1> 

      

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
    
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 h5 " style={{marginRight:'10px',color:'white'}}>
           
     <hr></hr>
           
        
          <li className="nav-item">
          
          {/* modal */}
          <ModalCss>
          <button type="button" class="mod-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Contact
</button>


<div  class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3  class="modal-title" id="exampleModalLabel">Contacts</h3>
        <button style={{color:'white', fontSize:'30px'}} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span style={{color:'white'}}>X</span></button>
      </div>
      <div class="modal-body" style={{color:'white',backgroundColor:'black'}}>
        {/* instagram */}
      <FontAwesomeIcon icon={faInstagram} size='2x' /> 
      <span style={{marginLeft:'10px', position:'relative',top:'-8px'}}>
        <a style={{textDecoration:'none',color:'white'}} href='https://www.instagram.com/lachlan_19/'>
        Instagram
        </a>
        </span>

      <br /><hr />
        
   {/* LinkedIn */}
   <FontAwesomeIcon icon={faLinkedinIn} size='2x' /> 
      <span style={{marginLeft:'10px', position:'relative',top:'-8px'}}>
        <a style={{textDecoration:'none',color:'white'}} href='https://www.linkedin.com/in/lachlan-da-silva-002b31242/'>
        LinkedIn
        </a>
        </span>









      </div>
     
    </div>
  </div>
</div>
</ModalCss>
         
            </li>

      
          </ul>
        </div>
      </div>
    </nav>
    </NavBarCss>
    <Outlet />
  </div>
}

export default Navbar;