'use client'
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';



const Products = () => {
    const [products, setProducts] = useState([
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: 99.99,
          name: 'Product 1',
          category: 'Sneakers',
        },
        {
          id: 2,
          image: 'product2.jpg',
          price: 129.99,
          name: 'Product 2',
          category: 'Boots',
        },
        {
            id: 23,
            image: 'product3.jpg',
            price: 89.99,
            name: 'Product 3',
            category: 'Outdoor',
          },
          {
            id: 4,
            image: 'product4.jpg',
            price: 149.99,
            name: 'Product 4',
            category: 'New',
          },
          {
            id: 4,
            image: 'product4.jpg',
            price: 149.99,
            name: 'Product 4',
            category: 'New',
          },
          {
            id: 64,
            image: 'product4.jpg',
            price: 149.99,
            name: 'Product 9',
            category: 'New',
          },
          {
            id: 5,
            image: 'product4.jpg',
            price: 149.99,
            name: 'Product 4',
            category: 'New',
          },
          {
            id: 84,
            image: 'product4.jpg',
            price: 149.99,
            name: 'Product 3',
            category: 'New',
          },
          {
            id: 14,
            image: 'product4.jpg',
            price: 149.99,
            name: 'Product 4',
            category: 'New',
          },
          {
            id: 14,
            image: 'product4.jpg',
            price: 149.99,
            name: 'Product 3',
            category: 'New',
          },
          {
            id: 4,
            image: 'product4.jpg',
            price: 149.99,
            name: 'Product 4',
            category: 'New',
          },
          {
            id: 10,
            image: 'product4.jpg',
            price: 149.99,
            name: 'Product 4',
            category: 'New',
          },
          {
            id: 5,
            image: 'product4.jpg',
            price: 149.99,
            name: 'Product 2',
            category: 'New',
          },
      ]);
      const [filteredProducts, setFilteredProducts] = useState([...products]);
      const [selectedCategory, setSelectedCategory] = useState('All');
      const [currentPage, setCurrentPage] = useState(0); // Changed initial page to 0
      const productsPerPage = 6;

      useEffect(() => {
        if (selectedCategory === 'All') {
          setFilteredProducts([...products]);
        } else {
          const filtered = products.filter((product) => product.category === selectedCategory);
          setFilteredProducts([...filtered]);
        }
        setCurrentPage(0);
      }, [selectedCategory, products]);

      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      };

      const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
      };

      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      const offset = currentPage * productsPerPage;
      const currentProducts = filteredProducts.slice(offset, offset + productsPerPage);

      return (
<div className='mx-auto max-w-screen-lg py-8'>
      <h1 className='text-lg font-bold mb-4'>All Products</h1>
      <div className='flex justify-center space-x-4 mb-4'>
        <button
          className={`${
            selectedCategory === 'All' ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 `}
          onClick={() => handleCategoryChange('All')}
        >
          All
        </button>
        {['Sneakers', 'Boots', 'Outdoor', 'New'].map((category) => (
          <button
            key={category}
            className={`${
              selectedCategory === category ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-700'
            } px-4 py-2 `}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {totalPages > 1 && (
        <div
        style={{display: 'flex'}}
        className='flex justify-center mt-4'>
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
            pageLinkClassName={'page-link'} // Add this class for page links
            previousClassName={'page-prev'} // Add this class for Previous link
            nextClassName={'page-next'} // Add this class for Next link
            />
        </div>
      )}
    </div>
      );
    };

export default Products;
