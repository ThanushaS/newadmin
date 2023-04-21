import React from 'react'

const LocalBusinesses = () => {
  return (
    <div className='grid lg:grid-cols-6 md:col-span-2 gap-4 p-4 '>
      <div className=' flex jusifiy-between w-full border p-4 rounded-lg r-5'>
     <div className='flex flex-col w-full pd-4'>
     <div className='local'></div>
     <p className='lb'>Local Businesses </p>
     <p className='viewall'>View All</p>
     <div className='row w-full pd-4'>
              <div className='cof'>
            <img src="/"alt="" 
           />
          </div>
          <p className='coffday'>Coffe Day</p>
          <p className='num'><i class="bi bi-telephone-fill"></i>77877876</p>
          <p className='country'><i class="bi bi-geo-alt-fill"></i>France</p>
      </div>
      <hr></hr>
  
      <div className='row w-full pd-4'>
      
              <div className='cof1'>
            <img src="/"alt="" 
           />
          </div>
          
          <p className='coffday1'>BKe</p>
          <p className='num1'><i class="bi bi-telephone-fill"></i>778787876</p>
          <p className='country1'><i class="bi bi-geo-alt-fill"></i>France</p>
    
     </div>
      
      <hr></hr>
    
      <div className='row w-full pd-4'>
              <div className='cof2'>
            <img src="/"alt="" 
           />
          </div>
          <p className='coffday2'>Writter</p>
          <p className='num2'><i class="bi bi-telephone-fill"></i>778976873</p>
          <p className='country2'><i class="bi bi-geo-alt-fill"></i>Canada</p>
     </div>
     
      <hr></hr>
      
      <div className='row w-full pd-4'>
      <div className='cof3'>
            <img src="/"alt="" 
           />
          </div>
          <p className='coffday3'>Entainer</p>
          <p className='num3'><i class="bi bi-telephone-fill"></i>778976873</p>
          <p className='country3'><i class="bi bi-geo-alt-fill"></i>Canada</p>
     </div>
     
      <hr></hr>
  
      <div className='row w-full pd-4'>
      <div className='cof4'>
            <img src="/"alt="" 
           />
          </div>
          <p className='coffday4'>Entainer</p>
          <p className='num4'><i class="bi bi-telephone-fill"></i>778976873</p>
          <p className='country4'><i class="bi bi-geo-alt-fill"></i>Canada</p>
     </div>
    
      <hr></hr>
     
      <div className='row w-full pd-4'>
      <p className='squre'></p>
      <p>ccccc</p>
     </div>
      
     </div>
       </div>
    </div>
  )
}

export default LocalBusinesses