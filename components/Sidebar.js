import React from 'react'
import Image from 'next/image'
import user from 'public/user.jpg'

const Sidebar = ({children}) => {
  return (
    <div className='flex '>       
       <div className="wrapper fixed w-94 h-screen p-4 border-r-[1px] flex flex-col justify-between">
          <div className="sidebar ">
            <div className="logo-details">
          <i className='bx bi-bootstrap'></i>
          <div className=" left">
                  <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"onClick={()=>{setInactive(!inactive);}} ></i>
            </div>
            </div>
            <ul className="nav">
                <li>
                    <a href="#"><i className='bx bi-grid'></i>
                    <span className="link-n">Dashboard</span>
                    </a>
                    <ul className="sub-menu blank">
                    <li><a className="link-n" href="">Dashboard</a></li>
                    </ul>
                </li>
                <li>
                  <div className="icon">
                    <a href="#">
                      <i className='bx bi-collection'></i>
                      <span className="link-n">Category</span>
                    </a>
                    <i className='bx bxs-chevron-down arrow'></i>
                  </div>
                  <ul className="sub-menu">
                    <li><a className="link-n" href="#">Category</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Card Design</a></li>
                    <li><a href="#">Login Form</a></li>
                  </ul>
                </li>
        <li>
            <div className="icon">
              <a href="#">
              <i className='bx bi-book'></i>
              <span className="link-n">Posts</span>
              </a>
              <i className='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link-n" href="#">Posts</a></li>
              <li><a href="#">html</a></li>
              <li><a href="#">JS</a></li>
              <li><a href="#">PHP</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bi-bar-chart'></i>
              <span className="link-n">Analytics</span>
            </a>
            <ul className="sub-menu blank">
            <li><a className="link-n" href="#">Analytics</a></li>
            </ul>
        </li>
    
      <li>
      <div className="p-del">
          <div className="profile-content">
            <div className='image'>
            <img src="/user.jpg"alt="" 
           />
          </div>
          </div>
        
        <div className="name-job">
          <div className="profile_name">John</div>
          <div className="job">Web Desginer</div>
        </div>
        <i  class='bi bi-box-arrow-left'></i>
      </div>
        
      
      
      </li>
    </ul>
        </div>    
     {/* <section className="home-section">
        <div className="home-content">
          <i className='bx bi-menu'></i>
          <span className="text">Drop Down Sidebar</span>
        </div>
  </section>*/}
  </div>
    <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar