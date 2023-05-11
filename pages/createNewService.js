import Link from 'next/link'
import React from 'react'

const createNewService = () => {
  return (
    <div>
       <div className='mmanageServices'>Manage Services</div>
          <div><p className='msRectangle7312'></p>
          <Link href='manageServices'><p className='mbuyerdashboard'>BUYER-DASHBOARD</p></Link></div>
          <Link href='sellerdashboard'><p className='msellerdashboard'>Seller-Dashboard</p></Link>
          <hr className='hr1'/>
          <p className=' Rectangle171'></p>
          <Link href='createNewService'><div>
            <i className="madd1 bi bi-plus-circle-fill"></i>
            <p className="CreateaNewService ">Create a New Service </p>
          </div></Link>
          <div className='Reactangle7241'></div>
          <div className='CreateaNewService1'>Create a New Service</div>
          <p className='PaidServices'>Paid Services:</p>
          <p className='Reactangle786'></p>
          <p className='EnterPaidServices'>Enter Paid Services</p>
          <i className="carrow bi bi-caret-down"></i>
          <p className='Discord'>Discord:</p>
          <input type='text'className='Reactangle7861'></input>
          <p className='EnterDiscord'>Enter Discord</p>
          <input type="submit" value="Submit" className='Reactangle17'/>
          <div>
               < i className="uimg bi bi-person-circle"></i>
               <p className='ManageMyTournaments'>Manage My Tournaments</p>
          </div>
          <div>
               <i className="pimg bi bi-play-circle-fill"></i>
               <p className='ManageMyPlayers'>Manage My Players/Staffs</p>
          </div>
          <div>
               <i className="proimg bi bi-person-vcard-fill"></i>
               <p className='MManageMyServices'>Manage My Service</p>
          </div>
          <div>
               <i className="signimg bi bi-box-arrow-right"></i>
               <p className='SignOut'>Sign Out</p>
          </div>
          <hr className='hr2'/>


      <div >
          <img src="/pur.png"alt="" className='purimg'/>
          </div>
        <div className=' Purchases'>Purchases and Memberships</div>
    </div>
  )
}

export default createNewService
