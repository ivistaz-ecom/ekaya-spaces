'use client'
import React, { useState, useRef, useEffect } from 'react'
import configData from '../../config.json'
import AOS from "aos";

function Banner() {
  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false // Whether animation should only happen once
    });
  }, []);

  const [Page, setData] = useState();
  

  const fetchPost = async () => {
    try {
      const postResponse = await fetch(`${configData.SERVER_URL}pages/3`);
      const postData = await postResponse.json();
      
      if (postResponse.ok) {
        setData(postData.title.rendered);
        //console.log(postData.content.rendered)
      } else {
        console.error(`Failed to fetch post. Status: ${postResponse.status}`);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
    }
  };
    
  useEffect(()=>{
    fetchPost()


  },[])


  return (


  <div className="h-[40vh] bg-[#5CA2B0] relative mx-auto" data-aos='fade-down'>
   <div className='lg:w-[80%] w-full absolute bottom-0 lg:py-12 lg:ml-40 md:ml-20 ml-5 pb-28' data-aos="fade-down">
              <h1 className='lg:text-7xl md:text-5xl text-3xl text-white poppins-light' dangerouslySetInnerHTML={{__html:Page}}/>
          
          
              </div>
    </div>
  )
}

export default Banner
