'use client'
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6;

  useEffect(() => {
    axios.get('/api/product')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const offset = currentPage * productsPerPage;
  const currentProducts = filteredProducts.slice(offset, offset + productsPerPage);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className='mx-auto max-w-screen-lg py-8'
      initial='initial'
      animate='animate'
      variants={containerVariants}
    >
      <h1 className='text-2xl text-gray-400 font-bold mb-4'>Products</h1>
      <div className='flex justify-center space-x-4 mb-4'>
        <button
          className={`${
            selectedCategory === 'All' ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2`}
          onClick={() => handleCategoryChange('All')}
        >
          All
        </button>
        {['Sneakers', 'Boots', 'Outdoor', 'New'].map((category) => (
          <button
            key={category}
            className={`${
              selectedCategory === category ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-700'
            } px-4 py-2`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            className='border border-gray-300 overflow-hidden transform hover:translate-y-[-10px] transition-transform duration-300'
            whileHover={{ y: -10 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      {totalPages > 1 && (
        <div
          style={{ display: 'flex' }}
          className='flex justify-center mt-4'
        >
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-prev'}
            nextClassName={'page-next'}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Products;
