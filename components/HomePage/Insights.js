'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import configData from '../../config.json'
import Link from 'next/link'

function Insights() {
  const [Blogs, setData] = useState([]);
  const sliderRef = useRef(null);

  const fetchPost = async () => {
    try {
      const postResponse = await fetch(`${configData.SERVER_URL}posts?_embed&categories[]=2&&production[]=${configData.SERVER}&status[]=publish&per_page=3`);
      const postData = await postResponse.json();
      
      if (postResponse.ok) {
        setData(postData);
        console.log(postData)
      } else {
        console.error(`Failed to fetch post. Status: ${postResponse.status}`);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      //setLoading(false);
    }
  };
    
  useEffect(()=>{
    fetchPost()


  },[])





  const NextArrow = ({onClick}) => (
  <div className="in-arrow w-[60%] lg:w-[90%] absolute  next-arrow" onClick={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g id="Group_49400" data-name="Group 49400" transform="translate(-1167 -1988)">
      <circle id="Ellipse_133" data-name="Ellipse 133" cx="24" cy="24" r="24" transform="translate(1167 1988)" fill="#1d1d1d"/>
      <g id="Group_13142" data-name="Group 13142" transform="translate(-69.769 -3315.449)">
        <g id="Group_158" data-name="Group 158" transform="translate(1248.88 5318.561)">
          <path id="Path_96" data-name="Path 96" d="M0,0H12.534V12.605" transform="translate(8.913 0) rotate(45)" fill="none" stroke="#fff" stroke-width="2"/>
        </g>
      </g>
    </g>
        </svg>
        </div>
    );
  
  
    const PrevArrow = ({onClick}) => (
      <div className="in-arrow w-[60%] lg:w-[90%] absolute -bottom-10 prev-arrow" onClick={onClick}>
  <svg id="Group_49401" data-name="Group 49401" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <circle id="Ellipse_133" data-name="Ellipse 133" cx="24" cy="24" r="24" fill="#1d1d1d"/>
    <g id="Group_13142" data-name="Group 13142" transform="translate(18.112 15.112)">
      <g id="Group_158" data-name="Group 158" transform="translate(0)">
        <path id="Path_96" data-name="Path 96" d="M0,12.605H12.534V0" transform="translate(17.776 8.913) rotate(135)" fill="none" stroke="#fff" stroke-width="2"/>
      </g>
    </g>
  </svg>
  </div>
    );

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />, // Pass onClick handler to prev arrow
      nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />, // Pass onClick handler to next arrow
      responsive: [
        {
          breakpoint: 1024, // Adjust this value based on your design breakpoints
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768, // Adjust this value based on your design breakpoints
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        // You can add more breakpoints and adjust settings as needed
      ]
      };


    return (
        <>
            <div className="text-center mt-[0px] container mx-auto z-96">
                <h2 className='lg:text-5xl text-4xl poppins-regular py-10'>Insights</h2>
                <p className='poppins-light text-[18px]'>Gain valuable insights into the world of luxury real estate and what makes an Ekaya home the right choice for discerning buyers.</p>
            </div>
            <div className="mx-auto mt-10 justify-center container mx-auto px-4 lg:px-0 z-96">

            <Slider  {...settings} className='z-96'>
            {
                    Blogs.map((items, index) => (
                      <div class={`z-50 max-w-sm  dark:bg-gray-800 dark:border-gray-700 ${items.acf.css}`} key={index}>
                        <Link href={`/blogs/${items.slug}`}>      
                          <Image class="rounded-0 w-full" src={items['_embedded']['wp:featuredmedia'][0]['source_url']} alt={items.title.rendered} width={300} height={300} />
                            <div class="p-5">
                                <h5 class="mb-2 text-start text-2xl font-light tracking-tight poppins-regular text-gray-900 dark:text-white">{items.title.rendered}</h5>
                                <p class="mb-3 text-start font-normal text-base poppins-regular text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{__html:items.excerpt.rendered}}/>
                          </div>
                          </Link>
                        </div>
                    ))
                    }
        
                  </Slider>
            </div>
            <div className="z-0 -mt-[15em] bg-no-repeat bg-white bg-cover bg-[url('/background.jpg')] bg-blend-multiply h-screen relative">
        </div>
        </>
    )
}

export default Insights
