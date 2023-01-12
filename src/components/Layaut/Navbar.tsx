import React from 'react'
import Searchbar from '../Searchbar'

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 bg-zinc-700 mx-auto flex  max-w-[1258px] z-10 flex-col'>
      <div className='flex justify-between items-center'>
      <div className='p-2'>
        <span className='text-2xl rounded-full p-1  border-2 font-serif border-sky-600 bg-white'>
          PC
        </span>
        <span className='text-2xl font-serif text-white underline decoration-sky-600'>Store</span>
      </div>

      <div className='flex justify-between w-2/3 p-2'>
        <Searchbar />

        <div className='flex gap-3'>
          <span>Conta</span>
          <hr className='w-[5px] h-full bg-white rounded-full' />
          <span>Carrinho</span>
        </div>
      </div>
      </div>

      <hr className='rgb h-2 w-full' />
    </nav>
  )
}

export default Navbar