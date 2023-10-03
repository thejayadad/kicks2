'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import logo from '../public/logo.png';
import Image from 'next/image';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import React Icons

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="py-8 px-4">
      <div className="flex justify-between mx-auto max-w-screen-lg">
        <div>
          <Link className="lg:text-lg sm:text-sm" href={'/'}>
          KickShare
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <FaHeart className="text-lg text-gray-300 cursor-pointer" />

          <FaShoppingCart className="text-lg text-gray-300 cursor-pointer" />

          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-gray-500 text-white px-3 py-1  hover:bg-gray-700 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
