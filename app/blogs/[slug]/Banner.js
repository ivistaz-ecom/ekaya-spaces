"use client";
import React, { useState, useRef, useEffect } from "react";
import configData from "../../../config.json";
import AOS from "aos";

import Image from "next/image";

function Banner({ slug }) {
  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false, // Whether animation should only happen once
    });
  }, []);

  const [pageTitle, setPageTitle] = useState();
  const [error, setError] = useState(false);
  const fetchPost = async () => {
    try {
      const postResponse = await fetch(
        `${configData.SERVER_URL}posts?_embed&slug=${slug}`
      );
      const postData = await postResponse.json();

      //console.log(postData[0].title.rendered)
      if (postData.length == 0) {
        setError(true);
      } else {
        setPageTitle(postData[0].title.rendered);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {error ? (
        <div
          className="h-[40vh] bg-[#5CA2B0] relative mx-auto"
          data-aos="fade-down"
        >
          <div
            className="w-full absolute bottom-0 lg:py-12 text-center pb-28 mx-auto"
            data-aos="fade-down"
          >
            <h1 className="lg:text-[10em] md:text-5xl text-3xl text-white poppins-medium">
              {" "}
              404
            </h1>
          </div>
        </div>
      ) : (
        <div className="lg:h-screen relative mx-auto" data-aos="fade-down">
          <Image
            src="/amora/banner.png"
            alt="Banner"
            width={1000} // Adjust width and height according to your image dimensions
            height={500}
            className="w-full h-full"
            priority // Preload the image
          />
          <div className="lg:w-[50%] w-full absolute bottom-0 lg:py-12 lg:ml-40 md:ml-20 pb-2">
            {/* dangerouslySetInnerHTML={{ __html:pageTitle  }} */}
            {/* {pageTitle} */}

            <h1
              className="lg:text-6xl md:text-5xl text-2xl lg:px-0 px-10 text-white poppins-light"
              dangerouslySetInnerHTML={{ __html: pageTitle }}
            />

            {/* <div class="flex lg:py-12 pt-4 content-between gap-x-2 sm:flex-row sm:justify-start sm:space-y-0">
     <div class="block">
       <h5 class="mb-2 lg:text-2xl text-[18px] font-light tracking-tight text-white">Moira</h5>
     </div>
     <div class="inline-block h-[28px] min-h-[0.20em] w-[0.15em] self-stretch bg-white lg:block md:block hidden"></div>
     <hr className='h-px border-t w-9/12 border-white pb-4 mx-auto lg:hidden hidden'/>
     <div class="block">
       <h5 class="mb-2 lg:text-2xl text-[18px] font-light tracking-tight text-white poppins-light">Goa</h5>
             </div>
             <div class="inline-block h-[28px] min-h-[0.20em] w-[0.15em] self-stretch bg-white lg:block md:block hidden"></div>
     <hr className='h-px border-t w-9/12 border-white pb-4 mx-auto lg:hidden hidden'/>
     <div class="block">
       <h5 class="mb-2 lg:text-2xl text-[18px] font-light tracking-tight text-white poppins-light">India</h5>
     </div>
   </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
