'use client'
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className='border border-gray-300 overflow-hidden cursor-pointer'>
      <div className='relative group'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <div className='bg-opacity-90 bg-gray-700 text-white absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <h2 className='text-md font-semibold'>{product.name}</h2>
          <p className='text-gray-200'>{product.category}</p>
          <p className='text-sm font-bold mt-2'>${product.price}</p>
          <a href='#' className='text-blue-400 hover:text-blue-600'>
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
