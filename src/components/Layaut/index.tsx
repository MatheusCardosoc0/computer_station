import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const index = ({ children }: { children: ReactNode }) => {
  return (
    <section className='flex flex-col items-center max-w-[1258px] mx-auto'>
      <Navbar />
      <hr className='rgb h-2 w-full' />

      <div>
        {children}
      </div>

      <Footer />
    </section>
  )
}

export default index