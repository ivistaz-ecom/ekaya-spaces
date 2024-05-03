import React from 'react'
import ContactBtn from '../common/ContactBtn'

function Banner() {
  return (
    <div className="bg-center bg-no-repeat bg-cover bg-[url('/Banner.png')] bg-gray-300 bg-blend-multiply h-screen relative">
    
      <ContactBtn/>
      <div className='overflow-hidden z-0'>
      <div class="vertical overflow-hidden"></div>
        <div class="vertical-1 overflow-hidden"></div>
        <div class="vertical-2 overflow-hidden"></div>
        <div class="vertical-3 overflow-hidden"></div>
        </div>
    </div>
  )
}

export default Banner
