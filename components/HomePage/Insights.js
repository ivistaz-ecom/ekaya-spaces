'use client'
import React, { useState, useRef } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Blogs = [
    {
        'id': '1',
        'title': 'Spaces that connect inside and outside',
        'excerpt': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.',
        'image': 'blog-1.png',
        'class': 'mt-0'

    },
    {
        'id': '1',
        'title': 'Spaces that connect inside and outside',
        'excerpt': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.',
        'image': 'blog-2.png',
        'class': 'mt-8'

    },
    {
        'id': '1',
        'title': 'Spaces that connect inside and outside',
        'excerpt': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.',
        'image': 'blog-3.png',
        'class': 'mt-16'

    }


]



function Insights() {

    const sliderRef = useRef(null);

    const NextArrow = ({onClick}) => (
  <div className="in-arrow next-arrow" onClick={onClick}>
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
      <div className="in-arrow prev-arrow" onClick={onClick}>
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
      };


    return (
        <>
            <div className="text-center mt-[0px] w-[70%] mx-auto z-96">
                <h2 className='text-5xl poppins-regular py-10'>Insights</h2>
                <p className='poppins-light text-2xl'>Gain valuable insights into the world of luxury real estate and what makes an Ekaya home the right choice for discerning buyers.</p>
            </div>
            <div className="mx-auto mt-10 justify-center w-[80%] z-96">

            <Slider  {...settings} className='z-96'>
            {
                    Blogs.map((items, index) => (
                        <div class={`z-50 max-w-sm  dark:bg-gray-800 dark:border-gray-700 ${items.class}`}>
                            <a href="#">
                                <img class="rounded-0" src={items.image} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-start text-2xl font-light tracking-tight poppins-regular text-gray-900 dark:text-white">{items.title}</h5>
                                </a>
                                <p class="mb-3 text-start font-normal text-base poppins-regular text-gray-700 dark:text-gray-400">{items.excerpt}</p>
                            </div>
                        </div>
                    ))
                    }
        
                  </Slider>
               
            </div>
            <div className="z-0 -mt-40 bg-no-repeat bg-cover bg-[url('/background.png')] bg-gray-300 bg-blend-multiply h-screen relative">
                
                </div>
        </>
    )
}

export default Insights
