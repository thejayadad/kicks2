'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ImageSlider from './ImageSlider';

const Hero = () => {
  const [images] = useState([
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
  ]);

  const controls = useAnimation();

  useEffect(() => {
    // Animate the hero section when it mounts
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls]);

  return (
    <section className='mx-auto max-w-screen-lg py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      {/* Column 1: Image Slider */}
      <motion.div
        className='col-span-1 sm:col-span-2 md:col-span-1 bg-gray-200 p-4'
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
      >
        <ImageSlider images={images} />
      </motion.div>

      {/* Column 2 */}
      <motion.div
        className='col-span-1 sm:col-span-1 md:col-span-1 bg-gray-300'
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
        transition={{ delay: 0.2 }}
      >
        <img
          src='https://via.placeholder.com/400x300'
          alt='Image 2'
          className='w-full h-full'
        />
      </motion.div>

      {/* Column 3 */}
      <motion.div
        className='col-span-1 sm:col-span-1 md:col-span-1 bg-gray-400'
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
        transition={{ delay: 0.4 }}
      >
        <img
          src='https://via.placeholder.com/400x300'
          alt='Image 3'
          className='w-full h-full'
        />
      </motion.div>

      {/* Column 4 */}
      <motion.div
        className='col-span-1 sm:col-span-1 md:col-span-1 bg-gray-500'
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
        transition={{ delay: 0.6 }}
      >
        <img
          src='https://via.placeholder.com/400x300'
          alt='Image 4'
          className='w-full h-auto'
        />
      </motion.div>
    </section>
  );
};

export default Hero;
