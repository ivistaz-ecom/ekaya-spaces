'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import ContactBtn from '../common/ContactBtn';
import Image from 'next/image';
import VerticalLines from '../common/VerticalLines';
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

const images = ['/home/carousel-1.png', '/home/carousel-2.png']; 

function Banner() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right'); // <- new

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full lg:h-screen h-[50vh] overflow-hidden z-0">
      {/* Carousel Track */}
      <div
        className={`flex transition-transform duration-700 ease-in-out`}
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-screen flex-shrink-0"
            style={{ width: `${100 / images.length}%` }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white text-black flex items-center justify-center rounded-full z-10 shadow-md"
      >
        <IoMdArrowBack size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white text-black flex items-center justify-center rounded-full z-10 shadow-md"
      >
        <IoMdArrowForward size={20} />
      </button>

      <ContactBtn />
      <VerticalLines />
    </div>
  );
}

export default Banner;
