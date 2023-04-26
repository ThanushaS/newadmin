import React from 'react'

const teams = () => {
  return (
    <div>
      <div className='te'>
        <p className='teams'>Teams</p>
      </div>
      <div className="search-controller1">
            <button className="search-btn1">
                <i className="bi bi-search"></i>
            </button>
                  <input type="text1" placeholder="Search..." />
      </div>
        <div className=' table'>
          <p className='tname'>Name</p>
          <p className='game'>Game</p>
          <p className='founder'>founder</p>
          <p className='country0'>country</p>
          <p className='teamcode'>teamcode</p>
        </div>
     
    </div>
  )
}

export default teams
