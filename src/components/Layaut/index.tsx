import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const index = ({ children }: { children: ReactNode }) => {
  return (
    <section className='w-full h-screen bg-zinc-600 overflow-y-scroll'>
      <div className='flex flex-col items-center max-w-[1258px]  mx-auto '>
        <Navbar />
        <hr className='rgb h-2 w-full' />

        <div>
          {children}
        </div>

        <Footer />
      </div>
    </section>
  )
}

export default index