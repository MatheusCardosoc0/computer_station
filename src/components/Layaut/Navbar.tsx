import React from 'react'
import Searchbar from '../Searchbar'
import { AiOutlineUser } from 'react-icons/ai'
import { CartIcon, CartMenu } from '../CartMenu'
import Link from 'next/link'

const Navbar = () => {

  return (
    <nav className='w-full fixed top-0 bg-zinc-700 mx-auto flex  max-w-[1258px] z-10 flex-col'>
      <div className='flex justify-between w-full items-center flex-col md:flex-row'>

        <Link href={'/'} className='p-2'>
          <span className='text-2xl rounded-full p-1  border-2 font-serif border-sky-600 bg-white'>
            PC
          </span>
          <span className='text-2xl font-serif text-white underline decoration-sky-600'>Store</span>
        </Link>


        

        <div className='flex justify-between mx-2 md:gap-40 gap-10'>
        <Searchbar />
          <div className='flex gap-3 text-3xl text-white'>
            <span>
              <AiOutlineUser />
            </span>
            <hr className='w-[5px] h-full bg-white rounded-full' />
            <CartIcon />
          </div>
        </div>
      </div>
      <CartMenu />
      <hr className='rgb h-2 w-full' />
    </nav>
  )
}

export default Navbar