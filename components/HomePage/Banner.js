'use client'
import React, { useEffect} from 'react'
import AOS from "aos";
import ContactBtn from '../common/ContactBtn'
import Image from 'next/image'
import VerticleLines from '../../components/common/VerticalLines'

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
    <div className="lg:h-screen h-[50vh] relative" data-aos='fade-down'>
      <Image
        src="/Banner.png"
        alt="Banner"
        width={1000} // Adjust width and height according to your image dimensions
        height={500}
        className='w-full h-full'
        priority // Preload the image
      />
    
      <ContactBtn/>
      <VerticleLines/>
    </div>
  )
}

export default Banner
