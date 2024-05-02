import React from 'react'

function Banner() {
  return (
    <div className="bg-center bg-no-repeat bg-cover bg-[url('/about-us.png')] bg-gray-300 bg-blend-multiply h-[70vh] relative mx-auto">
    
          <div className='w-[80%] absolute bottom-0 py-12 ml-40'>
              <h1 className='text-8xl text-white poppins-light'>
              About<br/>Moira
              </h1>
      </div>

    </div>
  )
}

export default Banner
