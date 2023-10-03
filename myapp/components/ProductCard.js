'use client'

import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const cardVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className='border border-gray-300 overflow-hidden'
      initial='initial'
      animate='animate'
      variants={cardVariants}
    >
      <div className='relative'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-[400px] object-cover'
        />
        <div className='bg-opacity-90 bg-gray-700 text-white absolute bottom-0 left-0 w-full p-4 opacity-0 hover:opacity-100 transition-opacity duration-300'>
          <h2 className='text-lg font-semibold'>{product.name}</h2>
          <p className='text-gray-200'>{product.category}</p>
          <p className='text-lg font-bold mt-2'>${product.price}</p>
          <a href='#' className='text-blue-400 hover:text-blue-600'>
            See More
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
