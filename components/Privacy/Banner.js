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


    <div className="lg:h-[40vh] bg-[#5CA2B0] relative mx-auto" data-aos='fade-down'>
   <div className='lg:w-[80%] w-full absolute bottom-0 lg:py-12 lg:ml-40 md:ml-20 ml-5 pb-28' data-aos="fade-down">
              <h1 className='lg:text-7xl md:text-5xl text-3xl text-white poppins-light'>
              Privacy Policy
              </h1>
              </div>
    </div>
  )
}

export default Banner
