import React from 'react'

const LocalBusinesses = () => {
  return (
    <div>
      <div className='grid'>
      <div className=' flex '>
       <div className='local'></div>
     <p className='lb'>Local Businesses </p>
     <button className='viewall'>View All</button>
     <div className='row w-full pd-4'>
              <div>
            <img src="/oip.jpg"alt="" 
            className='cof'/>
          </div>
          <p className='coffday'>Coffe Day</p>
          <p className='num'><i class="bi bi-telephone-fill"></i>7789898</p>
          <p className='country'><i class="bi bi-geo-alt-fill"></i>France</p>
      </div>
    
  
      <div className='row w-full pd-4'>
      
              <div >
            <img src="/b.jpg"alt="" 
           className='cof1'/>
          </div>
          
          <p className='coffday1'>BKe</p>
          <p className='num1'><i class="bi bi-telephone-fill"></i>778787876</p>
          <p className='country1'><i class="bi bi-geo-alt-fill"></i>France</p>
    
     </div>
      
   
    
      <div className='row w-full pd-4'>
              <div >
            <img src="/oip.jpg"alt="" 
           className='cof2'/>
          </div>
          <p className='coffday2'>Writter</p>
          <p className='num2'><i class="bi bi-telephone-fill"></i>778976873</p>
          <p className='country2'><i class="bi bi-geo-alt-fill"></i>Canada</p>
     </div>
     
    
      
      <div className='row w-full pd-4'>
      <div >
            <img src="/wp.jpg"alt="" 
          className='cof3' />
          </div>
          <p className='coffday3'>Entainer</p>
          <p className='num3'><i class="bi bi-telephone-fill"></i>778976873</p>
          <p className='country3'><i class="bi bi-geo-alt-fill"></i>Canada</p>
     </div>
     
    
  
      <div className='row w-full pd-4'>
      <div>
            <img src="/oip.jpg"alt="" 
           className='cof4' />
          </div>
          <p className='coffday4'>Entainer</p>
          <p className='num4'><i class="bi bi-telephone-fill"></i>778976873</p>
          <p className='country4'><i class="bi bi-geo-alt-fill"></i>Canada</p>
     </div>
    
      

      <div className='row w-full pd-4'>
      <p className='squre'></p>
      <div >
        <img src="/wp.jpg"alt="" className='logo'/>
        </div>
      <p className='esport'>www.esportspro.gg</p>
     </div>
      
    
       </div>
    </div>
    </div>
  )
}

export default LocalBusinesses