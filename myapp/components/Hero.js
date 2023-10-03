'use client'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ImageSlider from './ImageSlider';

const Hero = () => {
  const [images] = useState([
    'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
  ]);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls]);

  return (
    <section className='mx-auto max-w-screen-lg py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      <div
        className='col-span-1 sm:col-span-2 md:col-span-1 bg-gray-200 p-4'
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
      >
        <ImageSlider images={images} />
      </div>

      <motion.div
        className='col-span-1 sm:col-span-1 md:col-span-1 bg-gray-300'
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
        transition={{ delay: 0.2 }}
      >
        <img
          src='https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Image 2'
          className='w-full h-full'
        />
      </motion.div>

      <motion.div
        className='col-span-1 sm:col-span-1 md:col-span-1 bg-gray-400'
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
        transition={{ delay: 0.4 }}
      >
        <img
          src='https://images.pexels.com/photos/4462781/pexels-photo-4462781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Image 3'
          className='w-full h-full'
        />
      </motion.div>

      <motion.div
        className='col-span-1 sm:col-span-1 md:col-span-1 bg-gray-500'
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
        transition={{ delay: 0.6 }}
      >
        <img
          src='https://images.pexels.com/photos/1522381/pexels-photo-1522381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Image 4'
          className='w-full h-full'
        />
      </motion.div>
    </section>
  );
};

export default Hero;
