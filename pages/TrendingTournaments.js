import React from 'react'
import Image from 'next/image'
const TrendingTournaments = () => {
  return (
    <div>
      <div className='trend'>
        <p className='tt'> Trending Tournaments</p>
        <button className='tview'>View All</button>
      </div>
      <div>
        <div>
          <p className='treg'></p>
            <div >
              <img src="/oip.jpg"alt="" className='img10' />
            </div>
            <p className='name'>Jame 2023.02.02</p>
            <div >
              <img src="/c.png"alt="" className='img11' />
            </div>
            <p className='team'>Team Players</p>
           <button><i className="vertical bi bi-three-dots-vertical"></i></button> 
        </div>
      <div>
      <p className='treg1'></p>
      <div >
              <img src="/wp.jpg"alt="" className='img12'/>
            </div>
            <p className='name1'>Jame 2023.02.02</p>
            <div >
              <img src="/s.jpg"alt="" className='img13' />
            </div>
            <p className='team1'>Team Players</p>
            <button><i className="vertical1 bi bi-three-dots-vertical"></i></button>
      </div>
      <div>
      <p className='treg2'></p>
      <div >
              <img src="/b.jpg"alt=""className='img14'/>
            </div>
            <p className='name2'>Jame 2023.02.02</p>
            <div >
              <img src="/uk.png"alt="" className='img15'/>
            </div>
            <p className='team2'>Team Players</p>
            <button><i className="vertical2 bi bi-three-dots-vertical"></i></button>
      </div>
      <div>
      <p className='treg3'></p>
        <div >
              <img src="/oip.jpg"alt="" className='img16'/>
            </div>
            <p className='name3'>Jame 2023.02.02</p>
            <div >
              <img src="/s.jpg"alt=""className='img17' />
            </div>
            <p className='team3'>Team Players</p>
            <button><i className="vertical3 bi bi-three-dots-vertical"></i></button>
      </div>
      <div>
      <p className='treg4'></p>
        <div >
              <img src="/b.jpg"alt=""className='img18'/>
            </div>
            <p className='name4'>Jame 2023.02.02</p>
            <div >
              <img src="/c.png"alt="" className='img19'/>
            </div>
            <p className='team4'>Team Players</p>
            <button><i className="vertical4 bi bi-three-dots-vertical"></i></button>
      </div>
      </div>
    </div>
  )
}

export default TrendingTournaments