import React from 'react'
import user from "../public/user.jpg";
import Image from 'next/image';
import { icons } from 'react-icons';
const Navbar = () => {
  return (
<div>
<div className= 'navbar navbar navbar-expand-lg   py-4 px-1 sticky-top' >
            <div className=" item d-flex align-items-center">
                  <i className=" bi bi-list  primary-text fs-4 me-3"  ></i>
            </div>
        <div className="search-controller">
            <button className="search-btn">
                <i className="bi bi-search"></i>
            </button>
                  <input type="text" placeholder="Search..." />
        </div>
        <nav>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
       
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div className='items'>
                <div className="item">
                  <i className="bi bi-envelope-fill"></i>
                  <div className='counter'></div>            
                </div>
                <div className="item">
                  <i className="bi bi-bell-fill"></i>
                  <div className='counter'></div>             
                </div>  
                  <div className="item">
                      <i className="bi bi-gear-fill"></i>
                  </div>
                  <div className="item">
                  <img src="/user.jpg"alt="user"  className="avatar"/>
                    <div className="name-job">
                      <div className="profile_name">John</div>
                      <div className="mail">cod@gmail.com</div>
                    </div>
                  
                  </div>
                  </div>
              </ul>
       
      </nav>
      
    </div>
        </div>
  )
}

export default Navbar
