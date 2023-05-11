import React from 'react'

const LatestNews = () => {
  return (
    <div>
      <div className='news'>
        <p className='ln'>Latest News</p>
        <button className='viewall1'>View All</button>
      </div>
      <div>
       <p className='box1'></p>
        <div >
        <img src="/wp.jpg"alt="" className='box'/>
        </div>
       <p className='tour'>Tournamet of Online</p>
      </div>
      <div>
       <p className='box12'></p>
       <div >
        <img src="/wp.jpg"alt="" className='box2'/>
        </div>
       <p className='tour1'>Tournamet of Online</p>
      </div>
      <div>
       <p className='box13'></p>
       <div >
        <img src="/oip.jpg"alt="" className='box3'/>
        </div>
       <p className='sport'>Sport games Online</p>
      </div>
      <div>
       <p className='box14'></p>
       <div >
        <img src="/b.jpg"alt="" className='box4'/>
        </div>
       <p className='admin'>Admin</p>
      </div>
      <div>
       <p className='box15'></p>
       <div >
        <img src="/oip.jpg"alt="" className='box5'/>
        </div>
       <p className='youtube'>Youtube</p>
      </div>
    </div>
  )
}

export default LatestNews
