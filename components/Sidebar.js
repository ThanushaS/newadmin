import React from 'react'
import Image from 'next/image'
import user from 'public/user.jpg'
import Link from 'next/link'

const Sidebar = ({children}) => {
  return (
    <div className='flex '>       
       <div className="wrapper fixed w-94 h-screen p-4 border-r-[1px] flex flex-col justify-between">
          <div className="sidebar ">
          <Link href="/">
            <div className="logo-details">
            <div >
        <img src="/es.png"alt="" className='esimg'/>
        </div>
          <div className=" left">
                  <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"onClick={()=>{setInactive(!inactive);}} ></i>
            </div>
            </div>
            </Link>
            <ul className="nav">
                <li>
                  <div className="icon">
                    <Link href="/overView">
                      <i className='bx bi-grid'></i>
                      <span className="link-name">Dashboard</span>
                    </Link>
                    <i className='bx bxs-chevron-down arrow'></i>
                  </div>
                  <ul className="sub-menu ">
                    <li><div className='dRectangle740'><p className='das'>Dashboard</p> </div> </li>
                    <li><div className='dmRectangle741'><Link href="/ManageMyTournaments">Manage My Tournaments</Link></div></li>
                    <div className='msubmenu'>
                    <li><Link href="/manageTeamOrganisation">Manage Team/ Organisation </Link></li>
                    </div>
                    <ul className=''>
                      <li><Link href=''>Volva(org)</Link></li>
                      <li><Link href=''>Volva(org)</Link></li>
                      <li><Link href=''>Volva(org)</Link></li>
                      <li><Link href=''>Volva(org)</Link></li>
                    </ul>
                    <li><Link href="/manageServices">Manage Services</Link></li>
                    <ul className=''>
                      <li className=''> <Link href=''>Invitations</Link></li>
                      <li className=''><Link href=''>Open Order</Link></li>
                      <li className=''><Link href=''>Delivery Orders</Link></li>
                      <li className=''><Link href='/history'>History</Link></li>
                    </ul>
                  </ul>
                </li>
                <li>
                  <div className="icon">
                    <Link href="/nested">
                      <i className='bx bi-collection'></i>
                      <span className="link-name">Teams</span>
                    </Link>
                    <i className='bx bxs-chevron-down arrow'></i>
                  </div>
                  <ul className="sub-menu">
                    <li>Teams</li>
                    <li><Link href="/proTeams"> Pro Teams </Link></li>
                  </ul>
                </li>
        <li>
            <div className="icon">
              <Link href="/nested">
              <i className='bx bi-book'></i>
              <span className="link-name">Sponsor Perks</span>
              </Link>
              <i className='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className="sub-menu">
              <li>Sponsor Perks</li>
              <li>
                <Link href="/brandSponsor">Brand Sponsor</Link></li>
            </ul>
          </li>
          <li>
            <Link href="#">
              <i className='bx bi-bar-chart'></i>
              <span className="link-name">Analytics</span>
            </Link>
            <ul className="sub-menu blank">
            <li><a className="link-name" href="#">Analytics</a></li>
            </ul>
        </li>
    
      <li>
      <div className="p-del">
          <div className="profile-content">
            <div className='image'>
            <Image src="/user.jpg"alt="user" width={10} height={10}
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