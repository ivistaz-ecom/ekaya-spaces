'use client'
import React, { useEffect} from 'react'
import AOS from "aos";
import ContactBtn from '../common/ContactBtn'
import Image from 'next/image'


function Banner() {
  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false // Whether animation should only happen once
    });
  }, []);

  return (
    <div className="h-screen relative z-19" data-aos='fade-down'>
       <Image
        src="/takshavi-banner-1.png"
        alt="Banner"
        width={1000} // Adjust width and height according to your image dimensions
        height={500}
        className='w-full h-full'
        priority // Preload the image
      />
            <div className='w-[80%] absolute bottom-0 py-12 ml-40' data-aos="fade-down">
              <h1 className='text-7xl text-white poppins-light'>
              Takshavi
              </h1>
              <h2 className='text-7xl text-[#BBC6C9] poppins-light'>
              by Ekaya Spaces
              </h2>
            <div class="flex flex-col py-12 content-between gap-x-2 sm:flex-row sm:justify-start sm:space-y-0">
          <div class="block">
            <h5 class="mb-2 text-2xl font-light tracking-tight text-white">Frazer Town</h5>
          </div>
          <div class="inline-block h-[28px] min-h-[0.20em] w-[0.15em] self-stretch bg-white lg:block hidden"></div>
          <hr className='h-px border-t w-9/12 border-whitepb-4 mx-auto lg:hidden block'/>
          <div class="block">
            <h5 class="mb-2 text-2xl font-light tracking-tight text-white poppins-light">Bengaluru</h5>
                  </div>
                  <div class="inline-block h-[28px] min-h-[0.20em] w-[0.15em] self-stretch bg-white lg:block hidden"></div>
          <hr className='h-px border-t w-9/12 border-white pb-4 mx-auto lg:hidden block'/>
          <div class="block">
            <h5 class="mb-2 text-2xl font-light tracking-tight text-white poppins-light">Bengaluru</h5>
          </div>
        </div>
          </div>
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
