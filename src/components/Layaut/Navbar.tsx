import React from 'react'
import Searchbar from '../Searchbar'

const Navbar = () => {
  return (
    <nav className='w-full bg-zinc-700 mx-auto p-3 flex justify-between'>
      <div>
        <span className='text-2xl rounded-full p-1  border-2 font-serif border-sky-600 bg-white'>
          PC
        </span>
        <span className='text-2xl font-serif text-white underline decoration-sky-600'>Store</span>
      </div>

      <div className='flex justify-between w-2/3'>
        <Searchbar />

        <div className='flex gap-3'>
          <span>Conta</span>
          <hr className='w-[5px] h-full bg-white rounded-full' />
          <span>Carrinho</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar