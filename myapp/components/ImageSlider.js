'use client'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
      controls.start({ x: -currentIndex * 100 });
    }, [currentIndex, controls]);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
      <div className='relative overflow-hidden w-full h-64'>
        <div className='flex' style={{ width: `${images.length * 100}%` }}>
          {images.map((imageUrl, index) => (
            <motion.div
              key={index}
              className='w-full h-full flex-shrink-0'
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </motion.div>
          ))}
        </div>
        <button
          className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full cursor-pointer'
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full cursor-pointer'
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    );
  };

  export default ImageSlider