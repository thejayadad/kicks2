'use client'
import {signIn, signOut, useSession} from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../public/logo.png"
import Image from 'next/image'


const Navbar = () => {
    const {data: session} = useSession()
  return (
    <nav className='py-8 px-4'>
        <div className='flex justify-between mx-auto max-w-screen-lg bg-red-200'>
            <div>
                <Link
                className='lg:text-md sm:text-sm'
                href={'/'}
                >
                    <Image
                    src={logo}
                    className='h-8'

                    />
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar